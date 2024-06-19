import express, { Application } from "express";
import { SetupApplication } from "./src/infrastructure/SetupApplication";
import { realtyController } from "./src/presentation/controllers/RealtyController/instance";

class Server {
  static start(): void {
    const app = express();
    const application = new SetupApplication(3333, app, realtyController);
    application.init();
    application.start();
  }
}

Server.start();
