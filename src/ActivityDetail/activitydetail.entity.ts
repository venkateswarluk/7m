import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activitydetails' })
export class ActivityDetail {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'activitydetailid' })
  activityDetailId: number;

  @Column('int', { name: 'activityid' })
  activityId: number;

  @Column('text', { name: 'shortdescription' })
  shortDescription: string;

  @Column('text', { name: 'longdescription' })
  longDescription: string;

  @Column('text', { array: true })
  images: string[];

  @Column('text', { array: true })
  videos: string[];

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
  @Column('text', { name: 'activityphone' })
  activityPhone: string;
}
