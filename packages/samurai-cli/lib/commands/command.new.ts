import { CommanderStatic, Command } from 'commander';
import { AbstractCommand, Input } from '.';

export class NewCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command("new <name>")
            .alias("n")
            .description("")
            .option("-l, --language", "language")
            .action(async (name: string, command: Command) => {
                const inputs: Input[] = [];
                const options: Input[] = [];
                inputs.push({
                    name: "name",
                    value: name
                })
                await this.action.handler(inputs, options);
            })

    }
}