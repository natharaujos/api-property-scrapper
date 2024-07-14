import { ITicleWebScrapAdapter } from "src/application/domain/adapters/ITicleWebScrapAdapter";
import { IScrapTicle } from "src/application/domain/useCases/webScrappers/IScrapTicle";

export class ScrapTicle implements IScrapTicle {
  private ticleWebScrapAdapter: ITicleWebScrapAdapter;

  constructor(ticleWebScrapAdapter: ITicleWebScrapAdapter) {
    this.ticleWebScrapAdapter = ticleWebScrapAdapter;
  }

  async execute(): Promise<void> {
    await this.ticleWebScrapAdapter.scrapTest();
  }
}
