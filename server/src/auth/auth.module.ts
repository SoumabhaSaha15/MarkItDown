import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'utils/GoogleStrategy';
import { AuthService } from './auth.service';
import { User, UserSchema } from 'src/databases/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSerializer } from './../../utils/Serializer';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecretKey',
      signOptions: { expiresIn: (3600*24*30) }, // Token expiration time
    }),
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
