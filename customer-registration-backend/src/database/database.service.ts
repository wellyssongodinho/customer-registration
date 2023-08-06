import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('TYPEORM_HOST'),
      port: this.config.get<number>('TYPEORM_PORT'),
      database: this.config.get<string>('TYPEORM_DATABASE'),
      username: this.config.get<string>('TYPEORM_USERNAME'),
      password: this.config.get<string>('TYPEORM_PASSWORD'),
      autoLoadEntities: true,
      logger: 'file',
      synchronize: true,
      // ssl: true,
      // migrations: [this.config.get<string>('TYPEORM_SUBSCRIBERS')],
      // subscribers: [this.config.get<string>('TYPEORM_MIGRATIONS')],
      // cli: {
      //   migrationsDir: this.config.get<string>('TYPEORM_MIGRATIONS_DIR'),
      //   subscribersDir: this.config.get<string>('TYPEORM_SUBSCRIBERS_DIR'),
      // },
    };
  }
}
