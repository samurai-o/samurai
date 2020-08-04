import { AbstractRunner, RunnersOption } from "lib/common/runners";

export class AbstractSchematicsManager {
  constructor(protected schematics: string, protected runner: AbstractRunner) {}

  public async execute(command: string, options: RunnersOption[]) {
    const com = `${this.schematics} ${command} ${this.bindCommandString(
      options
    )}`;
    await this.runner.run(com);
  }

  private bindCommandString(options: RunnersOption[]) {
    return options.reduce((target, source) => {
      target += ` ${source.toCommandString()}`;
      return target;
    }, "");
  }
}
