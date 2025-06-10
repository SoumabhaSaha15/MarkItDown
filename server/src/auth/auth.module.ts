import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'utils/GoogleStrategy';
import { AuthService } from './auth.service';
import { User, UserSchema } from 'src/databases/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSerializer } from './../../utils/Serializer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AuthService',
      useClass: AuthService,
    },
  ],
  exports: [AuthService],
})
export class AuthModule { }
