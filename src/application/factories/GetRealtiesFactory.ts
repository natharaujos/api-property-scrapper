import { RealtyDbAdapter } from "../../infrastructure/repositories/dbAdapters/RealtyAdapter";
import { IGetRealties } from "../domain/useCases/IGetRealties";
import { GetRealties } from "../usecases/GetRealties";

export function getRealtiesFactory(): IGetRealties {
  const realtyDbAdapter = new RealtyDbAdapter();

  return new GetRealties(realtyDbAdapter);
}

export default getRealtiesFactory;
