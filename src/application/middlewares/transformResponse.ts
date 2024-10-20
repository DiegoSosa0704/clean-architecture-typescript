import {Request, Response, NextFunction } from "express"

interface Json {
  success: boolean;
  data: any[];
}

type Send<T = Response> = (body?: Json) => T;

interface CustomResponse extends Response {
  json: Send<this>;
}

export const transformResponse = (req: Request, res: CustomResponse, next: NextFunction) => {

  next()
}
