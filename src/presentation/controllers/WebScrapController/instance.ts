import { IScrapTicle } from "src/application/domain/useCases/webScrappers/IScrapTicle";
import scrapTicleFactory from "../../../application/factories/webScrappers/ScrapTicleFactory";
import { WebScrapController } from "./WebScrapController";

const scrapTicle: IScrapTicle = scrapTicleFactory();

const webScrapController = new WebScrapController(scrapTicle);

export { webScrapController };
