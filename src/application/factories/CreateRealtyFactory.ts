import { RealtyDbAdapter } from "../../infrastructure/repository/dbAdapters/RealtyAdapter";
import { ICreateRealty } from "../domain/useCases/ICreateRealty";
import { CreateRealty } from "../usecases/CreateRealty";

function createRealtyFactory(): ICreateRealty {
  // Aqui você tem acesso à classe CreateRealtyService que implementa ICreateRealty
  const realtyDbAdapter = new RealtyDbAdapter();

  return new CreateRealty(realtyDbAdapter);
}

export default createRealtyFactory;
