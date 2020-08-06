import { join, resolve } from "path";
import { existsSync } from "fs";
import { AbstractRunner } from ".";

export class SchematicRunner extends AbstractRunner {
  constructor() {
    super(`"${AbstractRunner.findCommandBinary("schematics")}"`);
  }
}
