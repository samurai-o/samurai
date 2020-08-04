import { Input } from '../commands';
export declare abstract class AbstractAction {
    abstract handler(inputs: Input[], options: Input[]): Promise<void>;
}
