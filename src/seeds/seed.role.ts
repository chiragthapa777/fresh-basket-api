import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { RoleEntity } from "../routes/user/entities/role.entity";
import { RoleEnum } from "../common/RoleEnum";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(RoleEntity)
      .values([
        { role: RoleEnum.admin},
        { role: RoleEnum.customer},
        { role: RoleEnum.rider},
      ])
      .execute()
  }
}
