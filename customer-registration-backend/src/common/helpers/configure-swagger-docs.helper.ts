import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];

export function configureSwaggerDocs(
  app: INestApplication,
  configService: ConfigService,
) {
  if (SWAGGER_ENVS.includes(configService.get<string>('NODE_ENV'))) {
    app.use(
      ['/docs', '/docs-json', '/docs-yaml'],
      basicAuth({
        challenge: true,
        users: {
          [configService.get<string>('SWAGGER_USER')]:
            configService.get<string>('SWAGGER_PASSWORD'),
        },
      }),
    );
    const config = new DocumentBuilder()
      .setTitle('NestJS API')
      .setDescription('NestJS API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
