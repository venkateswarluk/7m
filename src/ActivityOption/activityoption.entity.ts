import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activityoptions' })
export class ActivityOption {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'activityoptionid' })
  activityOptionId: number;

  @Column('text', { name: 'typeval' })
  typeVal: string;

  @Column('text', { name: 'typedescription' })
  typeDescription: string;

  @Column('text')
  name: string;

  @Column('int', { name: 'activityid' })
  activityId: number;

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
}
