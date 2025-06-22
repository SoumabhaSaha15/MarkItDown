import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:5173' });
  app
    .use(cookieParser())
    .use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 1000 }
    }))
    .use(passport.initialize())
    .use(passport.session());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
