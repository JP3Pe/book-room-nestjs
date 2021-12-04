import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port = configService.get("port");

  console.log(`listening at http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
