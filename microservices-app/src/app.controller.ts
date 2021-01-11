import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }

  @EventPattern('message_printed')
  async handleMessagePrinted(data: Record<string, unknown>) {
    // tslint:disable-next-line:no-console
    console.log(data.text);
  }

  @MessagePattern('sum')
  async accumulate(data: number[]): Promise<number> {
    // tslint:disable-next-line:no-console
    console.log('accumulate', data);
    return (data || []).reduce((a, b) => a + b);
  }
}
