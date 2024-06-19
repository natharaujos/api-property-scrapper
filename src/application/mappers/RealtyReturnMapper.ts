import { RealtyReturn } from "src/infrastructure/repositories/dbAdapters/entities/RealtyReturn";
import { RealtyOutput } from "../ports/RealtyOutput";

export class RealtyReturnMapper {
  mapRealtyReturnToRealtyOutput(realtyReturn: any[]): RealtyOutput[] {
    const realtyOutput = realtyReturn.map((realty) => realty as RealtyOutput);

    return realtyOutput;
  }
}
