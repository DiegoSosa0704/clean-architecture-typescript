import { Types } from "../../di/types";
import EmailBagController from "../../application/controllers/emailBag.controller";
import { container } from "../../di/container";
import { Router } from "express";
import emailBagValidation from "../../application/middlewares/validators/emailBag.validation";
import verifyToken from "../../application/middlewares/verifyToken";

const controller: EmailBagController = container.get<EmailBagController>(
  Types.EmailBagController,
);

const router = Router();

router
  .route("/")
  .post(
    verifyToken,
    emailBagValidation.createEmailBag,
    controller.createEmailBag,
  )
  .get(verifyToken, controller.findAllEmailBags);

export default router;
