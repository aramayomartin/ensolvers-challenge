"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1710795360959 = void 0;
class Migrations1710795360959 {
    constructor() {
        this.name = 'Migrations1710795360959';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "archived" boolean NOT NULL DEFAULT false, "completed" boolean NOT NULL DEFAULT false, "category_id" integer, CONSTRAINT "PK_af6206538ea96c4e77e9f400c3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "notes" ADD CONSTRAINT "FK_3d5c6951d7233408f4f9359a5c1" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "notes" DROP CONSTRAINT "FK_3d5c6951d7233408f4f9359a5c1"`);
        await queryRunner.query(`DROP TABLE "notes"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
exports.Migrations1710795360959 = Migrations1710795360959;
//# sourceMappingURL=1710795360959-migrations.js.map