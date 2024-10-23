import {Request, Response, NextFunction } from "express"
import { formatResponseObject } from "../../core/utils/util";

export const transformResponse = (req: Request, res: Response, next: NextFunction) => {
  const test: object = formatResponseObject(req.statusCode, req.body);
}
