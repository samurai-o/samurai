import { Input } from "lib/commands";
import { AbstractRunner, RunnersOption } from "lib/common/runners";
import { AbstractSchematicsManager } from ".";

export class SamuraiSchematicsManager extends AbstractSchematicsManager {
  constructor(runner: AbstractRunner) {
    super("samurai-schematic", runner);
  }

  public async execute(command: string, options: RunnersOption[]) {
    await super.execute(command, options);
  }

  //  private bindCommandToRunnerOption(options: Input[]): RunnersOption[] {
  //    const excludes: string[] = [];
  //    return options.reduce((target: RunnersOption[], source) => {
  //      if (!excludes.includes(source.name)) {
  //        target.push(new RunnersOption(source.name, source.value));
  //      }
  //      return target;
  //    }, []);
  //  }
}
