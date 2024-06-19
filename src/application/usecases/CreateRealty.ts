import { Realty } from "../domain/models/Realty";
import { IRealtyDbAdapter } from "../domain/adapters/IRealtyDbAdapter";
import { ICreateRealty } from "../domain/useCases/ICreateRealty";
export class CreateRealty implements ICreateRealty {
  private realtyDbAdapter: IRealtyDbAdapter;

  constructor(realtyDbAdapter: IRealtyDbAdapter) {
    this.realtyDbAdapter = realtyDbAdapter;
  }

  execute(name: string, link: string): void {
    const realty = new Realty("", name, link);
    this.realtyDbAdapter.createRealty(realty);
  }
}
