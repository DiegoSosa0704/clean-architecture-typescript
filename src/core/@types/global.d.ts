import { User } from '../types'

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    PORT: number
    CLIENT_URL: string
    AUTHORIZATION_KEY: string
    JWT_SECRET: string
  }
}

declare global {
  export interface Error {
    code?: string | undefined
  }
}
