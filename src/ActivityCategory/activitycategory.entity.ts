import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class ActivityCategory {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('text')
  servicetype: string;

  @Column('text')
  categoryname: string;

  @Column('time without time zone')
  createdat: Date;

  @Column('time without time zone')
  modifiedat: Date;

  @Column()
  @Generated('uuid')
  createdby: string;

  @Column()
  @Generated('uuid')
  modifiedby: string;

  @Column()
  isactive: boolean;

  @Column('int')
  categoryid: number;
}
