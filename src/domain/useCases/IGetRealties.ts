import { RealtyOutput } from "../../application/ports/RealtyOutput";

export interface IGetRealties {
  execute(): Promise<RealtyOutput[]>;
}
