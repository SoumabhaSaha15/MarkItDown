import { Controller, Get, UseGuards, Req, BadRequestException, Res, Query, UsePipes, ValidationPipe, Inject } from '@nestjs/common';
import * as Express from 'express';
import { GoogleAuthGuard } from 'utils/Guards';
import { UserProfileDTO } from './../../DTO/user-profile.dto';
import { validateSync } from 'class-validator';
import mongoose from 'mongoose';
import { AuthService } from './auth.service';
import axios from 'axios';
// import { UserQueryDTO } from 'DTO/user-query-dto';
import { UserQueryDTO } from './../../DTO/user-query-dto';
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Get('google-login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() { }

  @Get('google-redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Req() req: Express.Request): UserProfileDTO & { _id: mongoose.Types.ObjectId } | null {
    if (req.user) {
      const userProfile = new UserProfileDTO(), user: any = req.user;
      //@ts-ignore
      userProfile.name = user.displayName || user.name || '';
      userProfile.email = user.emails?.[0]?.value || user.email || '';
      userProfile.isEmailVerified = (user.emails?.[0]?.verified ?? user.isEmailVerified) ?? false;
      userProfile.profilePhoto = user.photos?.[0]?.value || user.profilePhoto || '';
      userProfile.accessToken = user.accessToken || '';

      const errors = validateSync(userProfile);
      if (errors.length > 0) throw new BadRequestException(errors);
      //@ts-ignore
      return { _id: req.user?._doc._id, ...userProfile };
    }
    return null;
  }

  @Get('google-logout')
  @UsePipes(ValidationPipe)
  async logout(@Req() req: Express.Request, @Res() res: Express.Response, @Query() query: UserQueryDTO) {
    try {
      let user = await this.authService.findUserById(query._id);
      if (!user) return res.status(400).json({ message: 'User not found.' });
      else {
        await axios.get(`https://accounts.google.com/o/oauth2/revoke?token=${user.accessToken}`);
        req.logout(() => {
          req.session?.destroy(() => {
            res.clearCookie('connect.sid'); // or your session cookie name
            res.status(200).json({ message: 'Logged out successfully' });
          });
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ message: 'Failed to log out.', error: error.message });
    }
  }

}
