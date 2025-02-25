import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env/env';
import { join } from 'path';
import { HttpModule } from './http/http.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '../../../.env'),
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    HttpModule,
  ],
})
export class AppModule {}
