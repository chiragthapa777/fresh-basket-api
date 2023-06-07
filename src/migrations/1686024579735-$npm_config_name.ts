import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1686024579735 implements MigrationInterface {
    name = ' $npmConfigName1686024579735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "isEmailVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "isEmailVerified"`);
    }

}
