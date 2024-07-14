import { RealtyDbAdapter } from "../../infrastructure/repositories/adapters/fireBaseAdapters/RealtyAdapter";
import { IGetRealties } from "../domain/useCases/IGetRealties";
import { GetRealties } from "../usecases/GetRealties";

export function getRealtiesFactory(): IGetRealties {
  // Aqui você tem acesso à classe CreateRealtyService que implementa ICreateRealty
  const realtyDbAdapter = new RealtyDbAdapter();

  return new GetRealties(realtyDbAdapter);
}

export default getRealtiesFactory;
