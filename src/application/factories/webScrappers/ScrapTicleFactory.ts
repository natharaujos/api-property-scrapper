import { IScrapTicle } from "../../../application/domain/useCases/webScrappers/IScrapTicle";
import { ScrapTicle } from "../../../application/usecases/WebScrappers/ScrapTicle";
import { TicleWebScrapAdapter } from "../../../infrastructure/repositories/adapters/webScrapAdapters/TicleWebScrapAdapter";

function scrapTicleFactory(): IScrapTicle {
  // Aqui você tem acesso à classe CreateRealtyService que implementa ICreateRealty
  const ticleWebScrapAdapter = new TicleWebScrapAdapter();

  return new ScrapTicle(ticleWebScrapAdapter);
}

export default scrapTicleFactory;
