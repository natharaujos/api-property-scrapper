import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RealtyController } from "src/presentation/controllers/RealtyController/RealtyController";

export class SetupApplication {
  constructor(
    private port = 3000,
    public app: Application,
    public realtyController: RealtyController
  ) {}

  public init(): void {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(cors());
    this.app.get("/", (req, res) => {
      res.send("Api Property Scrapper");
    });

    this.app
      .route("/realties")
      .post((req: Request<{}, {}, RealtyInput>, res: Response) =>
        this.realtyController.createRealtyAsync(req, res)
      )
      .get((req: any, res: Response) =>
        this.realtyController.getRealtyAsync(req, res)
      );
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
