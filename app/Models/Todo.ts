import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public done: boolean;
}
