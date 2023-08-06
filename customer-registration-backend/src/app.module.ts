import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CustomersModule } from './api/customers/customers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        TYPEORM_CONNECTION: Joi.string().required(),
        TYPEORM_PORT: Joi.string().required(),
        TYPEORM_USERNAME: Joi.string().required(),
        TYPEORM_PASSWORD: Joi.string().required(),
        TYPEORM_DATABASE: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
