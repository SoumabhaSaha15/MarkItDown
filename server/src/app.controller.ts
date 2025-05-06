import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
