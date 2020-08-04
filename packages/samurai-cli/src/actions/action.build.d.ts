import { Input } from "lib/commands";
import { AbstractAction } from ".";
export declare class BuildAction extends AbstractAction {
    handler(inputs: Input[], options: Input[]): Promise<void>;
}
