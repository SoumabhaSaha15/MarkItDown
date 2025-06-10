import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, IsUrl, MinLength, MaxLength, IsBoolean } from 'class-validator';
export class UserProfileDTO {
  @Transform(({ obj }) => obj.displayName)
  @IsString()
  @IsNotEmpty({ message: 'Display name is required.' })
  @MinLength(6, { message: 'Display name must be at least 6 characters long.' })
  @MaxLength(30, { message: 'Display name cannot be longer than 30 characters.' })
  name: string;

  @Transform(({ obj }) => obj.emails[0].value)
  @IsString()
  @IsEmail({}, { message: 'Invalid email format.' })
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @Transform(({ obj }) => obj.emails[0].verified)
  @IsNotEmpty({message: 'Email verification status is required.'})
  @IsBoolean({ message: 'Email verification status must be a boolean.' })
  isEmailVerified: boolean = false;

  @IsUrl({}, { message: 'Profile photo must be a valid URL.' })
  @IsString() // Ensure it's a string type
  profilePhoto: string;

  @IsNotEmpty({ message: 'Access token is required.' })
  @IsString()
  accessToken: string;
}
