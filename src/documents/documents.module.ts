import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';
import { Document } from './documents/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document])],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
