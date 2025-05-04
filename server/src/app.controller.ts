import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UserQueryDTO } from './../DTO/user-query-dto';
// import { Whitelist } from 'class-validator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) userQuery:UserQueryDTO): string[] {
    return this.appService.getHello();
  }
}
