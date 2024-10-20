import {
  CreateParams,
  Query,
  EmailBagEntity,
} from "../../domain/entities/emailBag.entity";
import mongoose, { Schema, model } from "mongoose";

export interface IEmailBag {
  _id: string;
  certificate: boolean;
  byConsumption: boolean;
  name: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<IEmailBag>(
  {
    certificate: {
      required: [true, "Este campo es obligatorio"],
      type: Boolean,
      default: false,
    },
    byConsumption: {
      required: [true, "Este campo es obligatorio"],
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: [true, "Este campo es obligatorio"],
      unique: true,
    },
    quantity: {
      type: Number,
      required: [true, "Este campo es obligatorio"],
      min: [1, "Cantidad superior a 1"],
    },
  },
  { timestamps: true },
);

const EmailBag = model<IEmailBag>("EmailBag", schema);

export default EmailBag;

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
