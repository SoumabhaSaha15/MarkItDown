import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { UserProfileDTO } from './../DTO/user-profile.dto';
import { Injectable, Inject } from '@nestjs/common';
import { AuthService } from '../src/auth/auth.service';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(('AuthService')) private readonly authService:AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
      scope: ['email', 'profile'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile): Promise<any> {
    let user:any = await this.authService.createUser({
      name: profile.displayName,
      email: profile.emails?.[0]?.value || '',
      isEmailVerified: profile.emails?.[0]?.verified ?? false,
      profilePhoto: profile.photos?.[0]?.value || '',
      accessToken: accessToken, // Store the access token
    });
    return user;
  }
}
