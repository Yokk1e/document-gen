import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DocumentsModule } from './documents/documents.module';
import { DocumentsController } from './documents/documents/documents.controller';
import { DocumentsService } from './documents/documents/documents.service';

@Module({
  imports: [TypeOrmModule, ConfigModule, DocumentsModule],
})
export class AppModule {}
