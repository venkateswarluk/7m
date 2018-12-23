import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class ActivityDetail {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int')
  activitydetailid: number;

  @Column('int')
  activityid: number;

  @Column('text')
  shortdescription: string;

  @Column('text')
  longdescription: string;

  @Column('text', { array: true })
  images: string[];

  @Column('text', { array: true })
  videos: string[];

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

  @Column('text')
  activityphone: string;
}
