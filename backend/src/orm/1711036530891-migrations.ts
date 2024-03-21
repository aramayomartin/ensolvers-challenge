import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1711036530891 implements MigrationInterface {
    name = 'Migrations1711036530891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "notes" ADD CONSTRAINT "FK_7708dcb62ff332f0eaf9f0743a7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP CONSTRAINT "FK_7708dcb62ff332f0eaf9f0743a7"`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "user_id"`);
    }

}
