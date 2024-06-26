import { RealtyReturn } from "src/infrastructure/repositories/dbAdapters/entities/RealtyReturn";
import { Realty } from "../models/Realty";

export interface IRealtyDbAdapter {
  createRealty(realty: Realty): void;
  getRealties(): Promise<RealtyReturn[]>;
}
