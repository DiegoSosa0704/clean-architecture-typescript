import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  CLIENT_URL: string | undefined
  MONGODB_URL: string | undefined
  AUTHORIZATION_KEY: string | undefined
  JWT_SECRET: string | undefined
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGODB_URL: process.env.MONGODB_URL,
    AUTHORIZATION_KEY: process.env.AUTHORIZATION_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  }
}

const config = getConfig()

export default config
