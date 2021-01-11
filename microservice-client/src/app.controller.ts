import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) { }

  async onApplicationBootstrap() {
    // await this.client.connect();
  }

  @Get()
  async getHello() {
    this.client.emit<any>('message_printed', new Message('Hello World!!!'));

    const r = await this.client.send<any, number[]>('sum', [2, 2, 2]);

    return this.client
      .send<any, number[]>('sum', [2, 2, 2])
      .pipe(map(c => 'sum = ' + c));

    // tslint:disable-next-line:no-console
    // console.log('sum', r);
    // return 'sum = ' + r;
  }
}
