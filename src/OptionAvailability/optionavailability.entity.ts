import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'optionavailabilities' })
export class OptionAvailability {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'optionavailabilityid' })
  optionAvailabilityId: number;

  @Column('date', { name: 'fromdate', default: '2018-12-29' })
  fromDate: Date;

  @Column('date', { name: 'todate', default: '2022-12-29' })
  toDate: Date;

  @Column('int', { name: 'maxadults' })
  maxAdults: number;

  @Column('int', { name: 'maxchilds' })
  maxChilds: number;

  @Column('int', { name: 'maxunits', default: 0 })
  maxUnits: number;

  @Column('numeric', { name: 'adultprice' })
  adultPrice: number;

  @Column('numeric', { name: 'childprice' })
  childPrice: number;

  @Column('numeric', { name: 'unitprice', default: 0.0 })
  unitPrice: number;

  @Column('int', { name: 'optionid' })
  optionId: number;

  @Column('date', {
    name: 'createdat',
    default: () => 'now()',
  })
  createdAt: string;

  @Column('date', {
    name: 'modifiedat',
    default: () => 'now()',
  })
  modifiedAt: string;

  @Column({
    name: 'createdby',
    default: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
  })
  @Generated('uuid')
  createdBy: string;

  @Column({
    name: 'modifiedby',
    default: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
  })
  @Generated('uuid')
  modifiedBy: string;

  @Column({ name: 'isactive', default: true })
  isActive: boolean;

  @Column('int', { name: 'activityid' })
  activityId: number;
}
