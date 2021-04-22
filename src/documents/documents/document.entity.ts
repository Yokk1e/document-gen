import { Entity, Column, ManyToOne } from 'typeorm';

import { Base } from '../../managed-entities/base.entity';

@Entity()
export class Document extends Base {
  @Column({ length: 255, unique: true })
  passportId: string;

  @Column({ length: 255, unique: true })
  navyId: string;

  @Column({ length: 255, nullable: true, default: null })
  name: string;

  @Column({
    type: 'datetime',
    precision: 6,
    nullable: true,
  })
  brithDate: Date;

  @Column({
    type: 'datetime',
    precision: 6,
    nullable: true,
  })
  entryDate: Date;

  @Column({ length: 255, nullable: true, default: null })
  rotation: string;

  @Column({ length: 255, nullable: true, default: null })
  position: string;

  @Column({ length: 255, nullable: true, default: null })
  abbrPosition: string;

  @Column({ length: 255, nullable: true, default: null })
  escapeCount: string;

  @Column({ nullable: true, default: null })
  height: number;

  @Column({ length: 255, nullable: true, default: null })
  addressId: string;

  @Column({ length: 255, nullable: true, default: null })
  addressGroup: string;

  @Column({ length: 255, nullable: true, default: null })
  addressStreet: string;

  @Column({ length: 255, nullable: true, default: null })
  addressSubDistrict: string;

  @Column({ length: 255, nullable: true, default: null })
  addressDistrict: string;

  @Column({ length: 255, nullable: true, default: null })
  addressProvince: string;

  @Column({
    type: 'datetime',
    precision: 6,
    nullable: true,
  })
  escapeDate: Date;

  @Column({ length: 255, nullable: true, default: null })
  fatherName: string;

  @Column({ length: 255, nullable: true, default: null })
  matherName: string;

  @Column({ length: 255, nullable: true })
  pdfFilenameTypeOne: string;
}
