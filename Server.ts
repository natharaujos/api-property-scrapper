import express, { Application } from "express";
import { SetupApplication } from "./src/infrastructure/SetupApplication";
import { realtyController } from "./src/presentation/controllers/RealtyController/instance";
import { webScrapController } from "./src/presentation/controllers/WebScrapController/instance";

class Server {
  static start(): void {
    const app = express();
    const application = new SetupApplication(
      3333,
      app,
      realtyController,
      webScrapController
    );
    application.init();
    application.start();
  }
}

Server.start();
