import { AbstractRunner, RunnersOption } from "lib/common/runners";
export declare class AbstractSchematicsManager {
    protected schematics: string;
    protected runner: AbstractRunner;
    constructor(schematics: string, runner: AbstractRunner);
    execute(command: string, options: RunnersOption[]): Promise<void>;
    private bindCommandString;
}
