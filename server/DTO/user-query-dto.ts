import { IsEmail, IsNotEmpty, IsString, Matches,  } from 'class-validator';
export class UserQueryDTO {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[\x00-\x7F]+$/, {
    message: 'Name can only contain letters and numbers',
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
