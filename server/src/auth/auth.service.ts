import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { User,UserDocument } from './../databases/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfileDTO } from './../../DTO/user-profile.dto';
@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  @UsePipes(ValidationPipe)
  async createUser(userData: UserProfileDTO): Promise<UserDocument> {
    let user = await this.userModel.findOne({ email: userData.email }).exec();
    if (user) {
      user.name = userData.name;
      user.profilePhoto = userData.profilePhoto;
      user.accessToken = userData.accessToken; // Update access token
      user.isLoggedIn = userData.isLoggedIn; // Update login status
      await user.save();
    }
    return (!user) ? await this.userModel.create(userData) : user;
  }
  async findUserById(id: string): Promise<UserDocument | null> {
    return await this.userModel.findById(id).exec();
  }
  async updateUserLoginStatus(id: string, isLoggedIn: boolean): Promise<UserDocument | null> {
    return await this.userModel.findByIdAndUpdate(id, {$set:{"isLoggedIn":isLoggedIn}}, { new: true }).exec();
  }
}
