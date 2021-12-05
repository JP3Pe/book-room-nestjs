import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnectionOptions } from "typeorm";
import Joi = require("joi");

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import AppConfig from "./config/app.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      load: [AppConfig],
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        SERVER_PORT: Joi.number().default(8008),
        DB_MASTER_HOST: Joi.string().required(),
        DB_MASTER_PORT: Joi.number().required().default(3310),
        DB_MASTER_USERNAME: Joi.string().required(),
        DB_MASTER_PASSWORD: Joi.string().allow("").required(),
        DB_MASTER_DATABASE: Joi.string().required().default("plane"),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return configService.get<ConnectionOptions>("database");
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
