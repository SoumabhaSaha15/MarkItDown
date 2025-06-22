import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
// import { Passport } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// import { UsersModule } from './users/users.module';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecretKey',
      signOptions: { expiresIn: (3600 * 24 * 30) }, // Token expiration time
    }),
    AuthModule,
    ConfigModule.forRoot({envFilePath: '.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    NestjsFormDataModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
