import { IsEmail, IsMongoId, IsNotEmpty, IsString, Matches, } from 'class-validator';
export class UserQueryDTO {
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}
