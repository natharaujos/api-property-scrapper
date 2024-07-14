import { ITicleWebScrapAdapter } from "../../../../application/domain/adapters/ITicleWebScrapAdapter";
import { IPropertyEntity } from "./entities/IPropertyEntity";

export class TicleWebScrapAdapter implements ITicleWebScrapAdapter {
  constructor() {}

  async getProperties(): Promise<IPropertyEntity[]> {
    const property: IPropertyEntity[] = [];

    return property;
  }
}
