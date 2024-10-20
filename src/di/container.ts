import 'reflect-metadata'
import { Container } from "inversify";
import { Types } from "./types";

// Data sources
import {
  IDBDatasource,
  DBDatasourceImpl,
} from "../data/data-source/db-datasource/dbDatasource";

// domain repos
import IEmailBagRepo from "../domain/repositories/emailBagRepo";

// data repos
import EmailBagRepoImpl from '../data/repositories/mongodb/emailBagRepoImpl';

// controllers
import EmailBagController from '../application/controllers/emailBag.controller';

export const container = new Container({ defaultScope: "Singleton" });

// data source
container.bind<IDBDatasource>(Types.IDBDatasource).to(DBDatasourceImpl);

// respositories
container.bind<IEmailBagRepo>(Types.IEmailBagRepo).to(EmailBagRepoImpl)

// controllers
container.bind<EmailBagController>(Types.EmailBagController).to(EmailBagController)
