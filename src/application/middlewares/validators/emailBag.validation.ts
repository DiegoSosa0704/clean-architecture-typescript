import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const createEmailBag = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    quantity: Joi.number().min(1).required(),
    certificate: Joi.boolean().required(),
    byConsumption: Joi.boolean().required(),
  });

  const payload = req.body;

  const { error } = schema.validate(payload);

  if (error) {
    return res.status(406).json({
      error: `Error in manager data: ${error.message}`,
    });
  } else next();
};

export default {
  createEmailBag
}
