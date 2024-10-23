import { IDBDatasource } from "../../data/interfaces/data-source/dbDatasource.interface";
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

