import Commander, { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';

function main() {
    const program: CommanderStatic = Commander;
    CommandLoader.load(program);
    program
        .version(require('../../package.json').version)
        .usage("<command>")
        .helpOption("-h,--help", "see help");
    program.parse(process.argv.slice(2));
    if (!process.argv.slice(2)) {
        process.exit(1)
    }
}