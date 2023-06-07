import { BaseEntity } from '../../../common/BaseEntity';
import { Entity, Column } from 'typeorm';

@Entity('Role')
export class RoleEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  role: string;
}
