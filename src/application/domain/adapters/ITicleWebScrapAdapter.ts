import { IPropertyEntity } from "src/infrastructure/repositories/adapters/webScrapAdapters/entities/IPropertyEntity";

export interface ITicleWebScrapAdapter {
  getProperties(): Promise<IPropertyEntity[]>;
}
