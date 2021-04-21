import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

import { AppModule } from './app.module';

async function bootstrap() {
  let app = null;

  try {
    const httpsOptions = {
      key: fs.readFileSync('./secrets/key.key'),
      cert: fs.readFileSync('./secrets/cert.crt'),
    };

    app = await NestFactory.create(AppModule, { httpsOptions });
  } catch (error) {
    console.log(error);

    app = await NestFactory.create(AppModule);
  }

  const configService = app.get(ConfigService);
  const port = configService.get('NEST_PORT') || 3000;

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    }),
  );

  if (process.env.API_DOCUMENT_ENABLE === 'TRUE') {
    const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Document Generate API')
      .setDescription('Document Generate API')
      .setVersion('1.0.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
  }

  await app.listen(port);
}
bootstrap();
