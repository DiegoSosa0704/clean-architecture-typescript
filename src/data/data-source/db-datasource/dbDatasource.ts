
import { injectable } from "inversify";
import config from "../../../config";
import { connect } from "mongoose";


export interface IDBDatasource {
  connectDb(): Promise<boolean>
}

@injectable()
export class DBDatasourceImpl implements IDBDatasource {
  connectDb(): Promise<boolean> {
    const isConnected = new Promise<boolean>((resolve, reject) => {
      const url: string = config.MONGODB_URL || ''
      connect(url)
        .then((connected) => {
          console.log('Database connected successfully')
          if (connected) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((err) => {
          console.log('DB connection error:', err)
          reject(false)
        })
    })
    return isConnected
  }
}



