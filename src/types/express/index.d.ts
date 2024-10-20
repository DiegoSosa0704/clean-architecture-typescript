import { Token } from ".";

export {}

declare global {
  namespace Express {
    export interface Request {
      payload?: Token
    }
  }
}
