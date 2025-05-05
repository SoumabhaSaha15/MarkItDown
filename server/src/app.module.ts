import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// @Module({
//   imports: [ConfigModule.forRoot({envFilePath: '.env',isGlobal: true})],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
// server/src/app.module.ts
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist', 'client'),
      serveStaticOptions: {
        index: false, // Don't serve index.html statically, we handle it in the controller
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
