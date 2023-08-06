import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { configureSwaggerDocs } from './common/helpers/configure-swagger-docs.helper';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT') || 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  configureSwaggerDocs(app, configService);

  app.enableCors({
    origin: configService.get<string>('ENDPOINT_CORS'),
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  await app.listen(port, async () => {
    Logger.log(
      '[WEB]',
      configService.get<string>('BASE_URL') +
        ':' +
        configService.get<string>('PORT'),
    );
    Logger.log(
      '[SWAGGER]',
      configService.get<string>('BASE_URL') +
        ':' +
        configService.get<string>('PORT') +
        configService.get<string>('SWAGGER_PATH'),
    );
  });
}

bootstrap();
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
