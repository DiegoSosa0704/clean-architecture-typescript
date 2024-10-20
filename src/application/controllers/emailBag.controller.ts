import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { Types } from "../../di/types";
import ResponseMessages from "../../core/utils/constants";
import IEmailBagRepo from "../../domain/repositories/emailBagRepo";
import { getErrorMessage } from "../../core/utils/errorHandler";

@injectable()
export default class EmailBagController {
  constructor(
    @inject(Types.IEmailBagRepo) private respository: IEmailBagRepo,
  ) {}

  createEmailBag = async (req: Request, res: Response) => {
    /*
     * POST
     *
     * BASE_URL/emailBag/v1/
     *
     */
    const { name } = req.body;
    try {
      const exists = await this.respository.isExists(name);
      if (exists) {
        return res.status(409).json({
          success: false,
          message: ResponseMessages.RES_MSG_EMAIL_BAG_ALREADY_EXISTS_EN,
        });
      }

      const payload = req.body;
      const emailBag = await this.respository.create(payload);

      if (!emailBag) {
        return res.status(500).json({
          success: false,
          message: ResponseMessages.RES_MSG_AN_ERROR_OCCURRED_EN,
        });
      }

      res.status(201).json({
        success: true,
        message: ResponseMessages.RES_MSG_EMAIL_BAG_CREATED_SUCCESSFULLY_EN,
        emailBag: emailBag,
      });
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      console.error(errorMessage);
      return res.status(500).json({
        success: false,
        message: ResponseMessages.RES_MSG_AN_ERROR_OCCURRED_EN,
      });
    }
  };

  findAllEmailBags = async (req: Request, res: Response) => {
    try {
      const emailBags = await this.respository.findAll({});
      res.status(200).json({
        success: true,
        totalResults: emailBags.length,
        results: emailBags,
      });
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      console.error(errorMessage);
      return res.status(500).json({
        success: false,
        message: ResponseMessages.RES_MSG_AN_ERROR_OCCURRED_EN,
      });
    }
  };
}
