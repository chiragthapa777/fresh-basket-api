import { BaseEntity } from "../../../common/BaseEntity";
import { Entity, Column } from "typeorm";

@Entity("User")
export class UserEntity extends BaseEntity {
  @Column({
    unique: true
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  @Column({
    default: true
  })
  isActive: boolean;

  @Column({
    default: false
  })
  isEmailVerified: boolean;
}
