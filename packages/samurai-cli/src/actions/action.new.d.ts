import { Input } from "../commands";
import { AbstractAction } from ".";
export declare class NewAction extends AbstractAction {
    handler(inputs: Input[], options: Input[]): Promise<void>;
}
