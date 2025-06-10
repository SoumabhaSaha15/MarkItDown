import { Controller, Get, Body, Post, ValidationPipe, Req, UseInterceptors } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { AppService } from './app.service';
import { UserQueryDTO } from 'DTO/user-query-dto';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Post('/auth')
  @FormDataRequest()
  async auth(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) body:UserQueryDTO):Promise<UserQueryDTO> {
    const x:UserQueryDTO = {...body};
    console.log(x)
    return x;
  }

}
