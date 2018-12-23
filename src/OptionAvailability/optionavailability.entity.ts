import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class OptionAvailability {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int')
  optionavailabilityid: number;

  @Column('time without time zone')
  fromdate: Date;

  @Column('time without time zone')
  todate: Date;

  @Column('int')
  maxadults: number;

  @Column('int')
  maxchilds: number;

  @Column('int')
  maxunits: number;

  @Column('numeric')
  adultprice: number;

  @Column('numeric')
  childprice: number;

  @Column('numeric')
  unitprice: number;

  @Column('int')
  optionid: number;

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
  activityid: number;
}
