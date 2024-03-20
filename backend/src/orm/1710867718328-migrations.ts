import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710867718328 implements MigrationInterface {
    name = 'Migrations1710867718328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP CONSTRAINT "FK_3d5c6951d7233408f4f9359a5c1"`);
        await queryRunner.query(`CREATE TABLE "notes_categories_categories" ("notesId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_903baca8eb3eaa3d591074461ef" PRIMARY KEY ("notesId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2e0a2eff29df3f8cee53380bd9" ON "notes_categories_categories" ("notesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_49f16f2a56924476186e59fc52" ON "notes_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "notes_categories_categories" ADD CONSTRAINT "FK_2e0a2eff29df3f8cee53380bd94" FOREIGN KEY ("notesId") REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "notes_categories_categories" ADD CONSTRAINT "FK_49f16f2a56924476186e59fc520" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes_categories_categories" DROP CONSTRAINT "FK_49f16f2a56924476186e59fc520"`);
        await queryRunner.query(`ALTER TABLE "notes_categories_categories" DROP CONSTRAINT "FK_2e0a2eff29df3f8cee53380bd94"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "completed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49f16f2a56924476186e59fc52"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2e0a2eff29df3f8cee53380bd9"`);
        await queryRunner.query(`DROP TABLE "notes_categories_categories"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD CONSTRAINT "FK_3d5c6951d7233408f4f9359a5c1" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
