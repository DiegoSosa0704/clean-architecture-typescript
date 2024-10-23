import {EmailBagEntity, Query, CreateParams} from "../entities/emailBag.entity"

export default interface IEmailBagRepo {
  isExists(name: string): Promise<boolean>

  create(payload: CreateParams): Promise<EmailBagEntity>

  findAll(query: Query): Promise<EmailBagEntity[]>

  findById(id: number | string): Promise<EmailBagEntity | null>

  updateOne(query: Query): Promise<EmailBagEntity | null>

  deleteById(id: number | string): Promise<boolean>
}

