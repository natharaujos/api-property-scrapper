import { RealtyDbAdapter } from "../../infrastructure/repositories/dbAdapters/RealtyAdapter";
import { ICreateRealty } from "../domain/useCases/ICreateRealty";
import { CreateRealty } from "../usecases/CreateRealty";

function createRealtyFactory(): ICreateRealty {
  const realtyDbAdapter = new RealtyDbAdapter();

  return new CreateRealty(realtyDbAdapter);
}

export default createRealtyFactory;
