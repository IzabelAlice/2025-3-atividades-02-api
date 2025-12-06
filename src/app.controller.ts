import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('info')
  getInfo() {
    return {
      status: 'online',
      version: '1.0.0',
      description: 'Esta é API de tarefas (todos) da turma de Infoweb 2025.',
    };
  }
}
