import { Controller, Get, UseGuards, Req, BadRequestException, Res, Query, UsePipes, ValidationPipe, Inject, NotFoundException, HttpException, UnauthorizedException, NotAcceptableException } from '@nestjs/common';
import * as Express from 'express';
import { GoogleAuthGuard } from 'utils/Guards';
import { UserProfileDTO } from './../../DTO/user-profile.dto';
import { UserQueryDTO } from './../../DTO/user-query-dto';
import { validateSync } from 'class-validator';
import mongoose, { Types } from 'mongoose';
import { AuthService } from './auth.service';
import axios from 'axios';
import { JwtService } from '@nestjs/jwt';
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService, private jwtService: JwtService) { }
  @Get('google-login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() { }

  @Get('google-redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Req() req: Express.Request, @Res() res: Express.Response): void {
    if (req.user) {
      const userProfile = new UserProfileDTO(), user: any = req.user;
      //@ts-ignore
      userProfile.name = user.displayName || user.name || '';
      userProfile.email = user.emails?.[0]?.value || user.email || '';
      userProfile.isEmailVerified = (user.emails?.[0]?.verified ?? user.isEmailVerified) ?? false;
      userProfile.profilePhoto = user.photos?.[0]?.value || user.profilePhoto || '';
      userProfile.accessToken = user.accessToken || '';
      userProfile.isLoggedIn = true;
      const errors = validateSync(userProfile);
      if (errors.length > 0) throw new BadRequestException(errors);
      res.cookie('_id', this.jwtService.sign({ "_id": user._id }), {
        httpOnly: true, maxAge: 60 * 60 * 24 * 7,
      });
      res.redirect(`${process.env.REDIRECT_FRONTEND_URI}/?_id=${user._id}`);
    }
  }

  @Get('google-logout')
  @UsePipes(ValidationPipe)
  async logout(@Req() req: Express.Request, @Res() res: Express.Response) {
    try {
      const cookieId = req.cookies?._id;
      if (!cookieId) return res.status(400).json({ message: 'User ID not found in cookies.' });
      const userId = this.jwtService.verify(cookieId)._id;
      if (!mongoose.isValidObjectId(userId)) return res.status(400).json({ message: 'Invalid user ID.' });
      let user = await this.authService.findUserById(userId);
      if (!user) return res.status(400).json({ message: 'User not found.' });
      else {
        await axios.get(`${process.env.GOOGLE_REVOKE_TOKEN_URL}?token=${user.accessToken}`);
        req.logout(() => {
          req.session?.destroy(() => {
            res.clearCookie('connect.sid'); // or your session cookie name
            res.clearCookie('_id'); // mongo id cookie
            res.status(200).json({ message: 'Logged out successfully' });
          });
        });
        await this.authService.updateUserLoginStatus(userId, false);
      }
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ message: 'Failed to log out.' });
    }
  }

  @Get('user-profile')
  @UsePipes(ValidationPipe)
  async getUserProfile(@Req() req: Express.Request): Promise<UserProfileDTO> {
    const cookieId = req.cookies?._id;
    if (!cookieId) throw new UnauthorizedException('User ID not found in cookies.');
    const userId = this.jwtService.verify(cookieId)._id;
    // console.log(userId)
    if (!mongoose.isValidObjectId(userId)) throw new NotAcceptableException('Invalid user ID');
    const user = await this.authService.findUserById(userId);
    if (!user) throw new NotFoundException('User not found');
    const userProfile = new UserProfileDTO();
    userProfile.name = user.name;
    userProfile.email = user.email;
    userProfile.isEmailVerified = user.isEmailVerified;
    userProfile.profilePhoto = user.profilePhoto;
    userProfile.accessToken = user.accessToken;
    userProfile.isLoggedIn = user.isLoggedIn;
    userProfile._id = (user._id as Types.ObjectId).toString();
    const errors = validateSync(userProfile);
    if (errors.length > 0) throw new HttpException(errors, 400);
    return userProfile;
  }
}
