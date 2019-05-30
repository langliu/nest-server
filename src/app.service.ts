import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  static getHello(): string {
    return JSON.stringify({ hello: 'wellcome to get this api' });
  }
}
