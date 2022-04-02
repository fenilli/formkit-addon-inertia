import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Todos extends BaseSchema {
  protected tableName = 'todos';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.boolean('done').defaultTo(false);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
