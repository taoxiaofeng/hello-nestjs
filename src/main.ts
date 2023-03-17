/**
 * 应用程序入口文件。 他使用NestFactory用来创建Nest应用实例
 * main.ts 包含一个异步函数，它负责引导我们的应用程序
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
bootstrap();
