import { Router, Request, Response } from "express";

import ResponseMessages from "../../core/utils/constants";
import emailBagRouter from "./emailBag.router";

const router = Router();

router.use('/v1/emailBag', emailBagRouter)

// not found route
router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: ResponseMessages.RES_MSG_NOT_FOUND_URL_EN,
  });
});

export default router;
