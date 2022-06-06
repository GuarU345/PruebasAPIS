import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  public id_producto: number

  @column()
  public nom_producto

  @column()
  public precio

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
