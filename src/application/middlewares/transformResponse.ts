import {Request, Response, NextFunction } from "express"
import { formatResponseObject } from "../../core/utils/util";

interface Json {
  success: boolean;
  data: any[];
}

type Send<T = Response> = (body?: Json) => T;

interface CustomResponse extends Response {
  json: Send<this>;
}

export const transformResponse = (req: Request, res: CustomResponse, next: NextFunction) => {
  const test: object = formatResponseObject(req.statusCode, req.body);
  

  const originalJson = res.json
  res.json = (body) => {
    const modifiedBodyJson = serverResponse.createResponseObject(
      res.statusCode,
      body || {}
    )
    originalJson.call(this, modifiedBodyJson)
  }
  next()
}
