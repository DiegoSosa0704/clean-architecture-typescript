import {
  CreateParams,
  Query,
  EmailBagEntity,
} from "../../domain/entities/emailBag.entity";
import { Schema, model } from "mongoose";
import { IEmailBag } from "../interfaces/models/emailBag.interface";

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
