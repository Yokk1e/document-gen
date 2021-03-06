import { Controller, Post, Body, Get, Header, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@ApiTags('documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get(':id')
  @Header('Cache-Control', 'no-cache, no-store')
  findOne(@Param('id') id: number) {
    return this.documentsService.findOne(id);
  }
}
