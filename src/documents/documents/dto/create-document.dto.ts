import { IsDateString, IsNotEmpty, IsNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly passportId: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly navyId: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly brithDate: Date;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly entryDate: Date;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly rotation: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly position: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly abbrPosition: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly escapeCount: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly height: number;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressId: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressGroup: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressStreet: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressSubDistrict: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressDistrict: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly addressProvince: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly escapeDate: Date;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly fatherName: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  readonly matherName: string;
}
