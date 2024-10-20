import { IDBDatasource } from "../../data/data-source/db-datasource/dbDatasource";
import { container } from "../../di/container";
import { Types } from "../../di/types";

const db: IDBDatasource = container.get(Types.IDBDatasource);

export const connectDb = async () => {
  try {
    const isConnected = await db.connectDb()
    return isConnected
  } catch (err) {
    console.error(err)
    return false
  }
}

