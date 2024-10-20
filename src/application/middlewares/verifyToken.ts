import { Request, Response, NextFunction } from "express";
// import * as express from 'express';
import ResponseMessages from "../../core/utils/constants"
import utils from "../../core/utils/util"
import { Token } from "../../core/types";


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req
    .header('Authorization')
    ?.replace('Token ', '')

  if (token) {
    try {
      const decoded = utils.decodeToken(token)
      req.payload = decoded
    } catch (err) {
      console.error('Token error', err)
      return res.status(401).json({
        success: false,
        message: ResponseMessages.RES_MSG_INVALID_TOKEN_EN,
      })
    }
    return next()
  }

  // token not provided
  return res.status(401).json({
    success: false,
    message: ResponseMessages.RES_MSG_INVALID_TOKEN_EN,
  })
}

export default verifyToken
