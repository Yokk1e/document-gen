import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PDFModule } from 'nestjs-pdf';
import { ConfigService } from '@nestjs/config';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';
import { Document } from './documents/document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Document]),
    PDFModule.register({
      view: {
        root: 'templates',
        engine: 'handlebars',
        extension: 'hbs',
      },
    }),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService, ConfigService],
})
export class DocumentsModule {}
