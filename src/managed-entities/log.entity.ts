import { Column } from 'typeorm';

export class Log {
  @Column({
    type: Number,
    nullable: true,
    default: null,
  })
  userId: Number;

  @Column({
    nullable: true,
    default: null,
  })
  user: string;
}
