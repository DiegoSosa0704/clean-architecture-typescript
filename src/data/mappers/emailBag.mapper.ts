import mongoose from "mongoose";
import { CreateParams, EmailBagEntity, Query } from "../../domain/entities/emailBag.entity";
import { IEmailBag } from "../interfaces/models/emailBag.interface";

export const Mapper = {
  toDtoCreation: (payload: CreateParams) => ({
    certificate: payload.certificate,
    byConsumption: payload.byConsumption,
    name: payload.name,
    quantity: payload.quantity,
  }),
  toQuery: (query: Query) => ({
    ...(query.id && { _id: new mongoose.Types.ObjectId(query.id) }),
    ...(query.certificate && { certificate: query.certificate }),
    ...(query.byConsumption && { byConsumption: query.byConsumption }),
    ...(query.name && { name: query.name }),
    ...(query.quantity && { quantity: query.quantity }),
    ...(query.createdAt && { createdAt: query.createdAt }),
    ...(query.updatedAt && { updatedAt: query.updatedAt }),
  }),
  toEntity: (model: IEmailBag): EmailBagEntity =>
    new EmailBagEntity(
      model.certificate,
      model.byConsumption,
      model.name,
      model.quantity,
      model.createdAt,
      model.updatedAt,
      model._id.toString()
    ),
};
