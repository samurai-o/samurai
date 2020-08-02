import { Input } from '../commands';
export abstract class AbstractAction {
    public abstract async handler(inputs: Input[], options: Input[]): Promise<any>
}