import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class ActivityOption {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int')
  activityoptionid: number;

  @Column('text')
  typeval: string;

  @Column('text')
  typedescription: string;

  @Column('text')
  name: string;

  @Column('int')
  activityid: number;

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
}
