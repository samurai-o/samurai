import { CommanderStatic } from 'commander';
import { NewAction } from '../actions';
import { NewCommand } from '.';
export class CommandLoader {
    public static load(program: CommanderStatic) {
        new NewCommand(new NewAction()).load(program);
    }
}