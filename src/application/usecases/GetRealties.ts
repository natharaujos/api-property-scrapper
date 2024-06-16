import { Realty } from "../../domain/models/Realty";
import { IRealtyDbAdapter } from "../../domain/adapters/IRealtyDbAdapter";
import { IGetRealties } from "../interfaces/IGetRealties";
import { RealtyReturnMapper } from "../mappers/RealtyReturnMapper";
import { RealtyOutput } from "../ports/RealtyOutput";

export class GetRealties implements IGetRealties {
  private realtyDbAdapter: IRealtyDbAdapter;

  constructor(realtyDbAdapter: IRealtyDbAdapter) {
    this.realtyDbAdapter = realtyDbAdapter;
  }

  async execute(): Promise<RealtyOutput[]> {
    const realtyReturnMapper = new RealtyReturnMapper();
    const resultado = await this.realtyDbAdapter.getRealties().then((res) => {
      console.log(res);
      return realtyReturnMapper.mapRealtyReturnToRealtyOutput(res);
    });

    return resultado;
  }
}
