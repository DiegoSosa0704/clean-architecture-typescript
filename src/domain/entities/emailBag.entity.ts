export class EmailBagEntity {
  id?: number | string;
  certificate: boolean;
  byConsumption: boolean;
  name: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    certificate: boolean,
    byConsumption: boolean,
    name: string,
    quantity: number,
    createdAt: Date,
    updatedAt: Date,
    id?: number | string,
  ) {
    this.id = id;
    this.certificate = certificate;
    this.byConsumption = byConsumption;
    this.name = name;
    this.quantity = quantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export type CreateParams = {
  certificate: boolean;
  byConsumption: boolean;
  name: string;
  quantity: number;
};

export type Query = {
  id?: number | string;
  certificate?: boolean;
  byConsumption?: boolean;
  name?: string;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
