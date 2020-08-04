import { AbstractRunner, RunnersOption } from "lib/common/runners";
import { AbstractSchematicsManager } from ".";
export declare class SamuraiSchematicsManager extends AbstractSchematicsManager {
    constructor(runner: AbstractRunner);
    execute(command: string, options: RunnersOption[]): Promise<void>;
}
