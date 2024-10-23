import { injectable } from "inversify";

import {
  CreateParams,
  EmailBagEntity,
  Query,
} from "../../../domain/entities/emailBag.entity";
import IEmailBagRepo from "../../../domain/repositories/emailBagRepo.interface";
import EmailBag from "../../../data/models/emailBag.model";
import { Mapper } from "../../mappers/emailBag.mapper";

@injectable()
export default class EmailBagRepoImpl implements IEmailBagRepo {
  async isExists(name: string): Promise<boolean> {
    const doc = await EmailBag.findOne({ name });
    return doc ? true : false;
  }

  async create(payload: CreateParams): Promise<EmailBagEntity> {
    const doc = await EmailBag.create(Mapper.toDtoCreation(payload));
    return Mapper.toEntity(doc);
  }

  async findAll(query: Query): Promise<EmailBagEntity[]> {
    const queryObj = { ...Mapper.toQuery(query) };
    const docs = await EmailBag.find(queryObj);
    const entities = docs.map((doc) => Mapper.toEntity(doc));
    return entities;
  }

  async findById(id: number | string): Promise<EmailBagEntity | null> {
    const doc = await EmailBag.findById(id);
    return doc ? Mapper.toEntity(doc) : null;
  }

  async updateOne(query: Query): Promise<EmailBagEntity | null> {
    const { _id, ...updates } = Mapper.toQuery(query);
    const update = { $set: { ...updates } };
    const updateDoc = await EmailBag.findByIdAndUpdate(_id, update, {
      new: true,
    });
    return updateDoc ? Mapper.toEntity(updateDoc) : null;
  }

  async deleteById(id: number | string): Promise<boolean> {
    try {
      await EmailBag.findByIdAndDelete(id).exec();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
