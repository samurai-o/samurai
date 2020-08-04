import { Runner, SchematicRunner, GulpRunner } from ".";

export class FactoryRunner {
  public static create(runner: Runner) {
    switch (runner) {
      case Runner.SCHEMATIC:
        return new SchematicRunner();
        break;
      case Runner.GULP:
        return new GulpRunner();
        break;
      default:
        break;
    }
  }
}
