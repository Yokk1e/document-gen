import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [TypeOrmModule, ConfigModule, DocumentsModule],
})
export class AppModule {}
