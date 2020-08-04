import { FactoryRunner, Runner, SchematicRunner } from "lib/common/runners";
import {
  Schematics,
  SamuraiSchematicsManager,
  DefaultSchematicsManager,
} from ".";

export class FactorySchematicsManager {
  public static create(schematics: Schematics) {
    switch (schematics) {
      case Schematics.SAMURAI:
        return new SamuraiSchematicsManager(
          FactoryRunner.create(Runner.SCHEMATIC) as SchematicRunner
        );
        break;
      default:
        return new DefaultSchematicsManager(
          Schematics.DEFAULT,
          FactoryRunner.create(Runner.SCHEMATIC) as SchematicRunner
        );
        break;
    }
  }
}
