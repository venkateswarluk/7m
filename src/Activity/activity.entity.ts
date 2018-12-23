import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column()
  activityName: string;

  @Column('text')
  description: string;

  @Column()
  stars: number;

  @Column('text')
  thumburl: string;

  @Column('int')
  minchildage: number;

  @Column('int')
  maxchildage: number;

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
  destinationid: number;

  @Column('int')
  categoryid: number;

  @Column('int')
  activityid: number;

  @Column('int')
  optionid: number;
}
