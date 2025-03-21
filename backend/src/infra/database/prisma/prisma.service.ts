import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['error', 'warn', 'info', 'query'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    return;
  }

  async onModuleDestroy() {
    await this.$disconnect();
    return;
  }
}
