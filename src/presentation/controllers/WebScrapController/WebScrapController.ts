import { IGetRealties } from "src/application/domain/useCases/IGetRealties";
import { ICreateRealty } from "../../../application/domain/useCases/ICreateRealty";
import { Request, Response } from "express";
import { IScrapTicle } from "src/application/domain/useCases/webScrappers/IScrapTicle";

export class WebScrapController {
  private scrapTicle: IScrapTicle;

  constructor(scrapTicle: IScrapTicle) {
    this.scrapTicle = scrapTicle;
  }

  async scrapTicleAsync(req: any, res: Response) {
    try {
      this.scrapTicle.execute();
      setTimeout(() => {
        res.status(201).send("scrap successfully.");
      }, 2000);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
