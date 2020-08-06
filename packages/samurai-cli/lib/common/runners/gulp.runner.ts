import { AbstractRunner } from ".";

export class GulpRunner extends AbstractRunner {
  constructor() {
    super(`"${AbstractRunner.findCommandBinary("gulp")}"`);
  }
}
