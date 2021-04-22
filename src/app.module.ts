import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    DocumentsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', `${process.env.ASSET_PATH}`),
      serveRoot: `/${process.env.ASSET_PATH}`,
    }),
  ],
})
export class AppModule {}
