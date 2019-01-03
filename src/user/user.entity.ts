import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('text')
  email: string;

  @Column('text') password: string;

  @Column('text', { name: 'emailconfirmed' }) emailConfirmed: string;

  @Column('text') roles: string[];

  @Column('date', {
    name: 'createddatetime',
    default: () => 'now()',
  })
  createdAt: string;

  @Column('date', {
    name: 'modifieddatetime',
    default: () => 'now()',
  })
  modifiedAt: string;

  @Column({
    name: 'createdoperatorid',
    default: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
  })
  @Generated('uuid')
  createdBy: string;

  @Column({
    name: 'modifiedoperatorid',
    default: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
  })
  @Generated('uuid')
  modifiedBy: string;

  @Column({ name: 'isactive', default: true })
  isActive: boolean;

  @Column('text')
  role: string;
}
