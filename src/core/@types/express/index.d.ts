import { Token } from "../../../core/types";

export {}

declare global {
  namespace Express {
    export interface Request {
      payload?: Token
    }
  }
}
