import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }

  @EventPattern('message_printed')
  async handleMessagePrinted(data: Record<string, unknown>) {
    // tslint:disable-next-line:no-console
    console.log(data.text);
  }
}
