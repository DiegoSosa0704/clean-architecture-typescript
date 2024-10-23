import "reflect-metadata";
import { Container } from "inversify";
import { Types } from "./types";

// Data sources
import { DBDatasourceImpl } from "../data/data-source/db-datasource/dbDatasource";
import { IDBDatasource } from "../data/interfaces/data-source/dbDatasource.interface";

// domain repos
import IEmailBagRepo from "../domain/repositories/emailBagRepo.interface";

// data repos
import EmailBagRepoImpl from "../data/repositories/mongodb/emailBagRepoImpl";

// controllers
import EmailBagController from "../application/controllers/emailBag.controller";

export const container = new Container({ defaultScope: "Singleton" });

// data source
container.bind<IDBDatasource>(Types.IDBDatasource).to(DBDatasourceImpl);

// respositories
container.bind<IEmailBagRepo>(Types.IEmailBagRepo).to(EmailBagRepoImpl);

// controllers
container
  .bind<EmailBagController>(Types.EmailBagController)
  .to(EmailBagController);
