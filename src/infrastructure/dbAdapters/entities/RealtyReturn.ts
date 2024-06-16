import { RealtyOutput } from "src/application/ports/RealtyOutput";

export class RealtyReturn {
  name: string;
  link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }
}
