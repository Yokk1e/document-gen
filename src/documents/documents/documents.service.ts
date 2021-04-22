import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, In } from 'typeorm';
import { InjectPdf, PDF, PdfOptions } from 'nestjs-pdf';
import { Guid } from 'guid-typescript';
import { ConfigService } from '@nestjs/config';
import { Document } from './document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
    @InjectPdf()
    private readonly pdf: PDF,
    private readonly configService: ConfigService,
  ) {}
  async create(createDocumentDto: CreateDocumentDto) {
    const document = new Document();
    document.passportId = createDocumentDto.passportId;
    document.navyId = createDocumentDto.navyId;
    document.name = createDocumentDto.name;
    document.brithDate = createDocumentDto.brithDate;
    document.entryDate = createDocumentDto.entryDate;
    document.rotation = createDocumentDto.rotation;
    document.position = createDocumentDto.position;
    document.abbrPosition = createDocumentDto.abbrPosition;
    document.escapeCount = createDocumentDto.escapeCount;
    document.height = createDocumentDto.height;
    document.addressId = createDocumentDto.addressId;
    document.addressGroup = createDocumentDto.addressGroup;
    document.addressStreet = createDocumentDto.addressStreet;
    document.addressSubDistrict = createDocumentDto.addressSubDistrict;
    document.addressDistrict = createDocumentDto.addressDistrict;
    document.addressProvince = createDocumentDto.addressProvince;
    document.escapeDate = createDocumentDto.escapeDate;
    document.fatherName = createDocumentDto.fatherName;
    document.matherName = createDocumentDto.matherName;

    return await getManager().transaction(
      'SERIALIZABLE',
      async transactionalEntityManager => {
        const _document = await transactionalEntityManager.save(document);

        const pdfFilenameTypeOne = `${Guid.create().toString()}.pdf`;
        await this.generatePdf(pdfFilenameTypeOne, document);

        _document.pdfFilenameTypeOne = pdfFilenameTypeOne;
        return await transactionalEntityManager.save(_document);
      },
    );
  }

  async generatePdf(pdfFilename: string, document: Document) {
    const filename = `${this.configService.get(
      'UPLOAD_PATH',
    )}/documents/${pdfFilename}`;

    const options: PdfOptions = {
      filename,
      template: 'document',
      locals: {
        ...document,
      },
    };
    return await this.pdf(options);
  }

  async findOne(id: number): Promise<Document> {
    return this.documentRepository.findOneOrFail(id);
  }
}
