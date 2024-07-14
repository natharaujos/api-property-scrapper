import { RealtyReturn } from "src/infrastructure/repositories/adapters/fireBaseAdapters/entities/RealtyReturn";
import { Realty } from "../models/Realty";

export interface IRealtyDbAdapter {
  createRealty(realty: Realty): void;
  getRealties(): Promise<RealtyReturn[]>;
}
