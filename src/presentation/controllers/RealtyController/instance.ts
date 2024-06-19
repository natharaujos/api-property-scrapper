import { ICreateRealty } from "src/application/domain/useCases/ICreateRealty";
import { RealtyController } from "./RealtyController";
import { IGetRealties } from "src/application/domain/useCases/IGetRealties";
import createRealtyFactory from "../../../application/factories/CreateRealtyFactory";
import getRealtiesFactory from "../../..//application/factories/GetRealtiesFactory";

const createRealty: ICreateRealty = createRealtyFactory();
const getRealties: IGetRealties = getRealtiesFactory();

const realtyController = new RealtyController(createRealty, getRealties);

export { realtyController };
