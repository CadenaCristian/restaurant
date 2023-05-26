import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('recipe')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() params) {
    return this.appService.getHello(params);
  }
}
