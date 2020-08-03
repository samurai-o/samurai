import Commander, { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';

function main() {
    const program: CommanderStatic = Commander;
    program
        .version(require('../../package.json').version, "-v, --version", "Output the current version.")
        .usage("<command>")
        .helpOption("-h, --help", "Output usage information.");

    CommandLoader.load(program);
    Commander.parse(process.argv.slice(2));
    if (!process.argv.slice(2)) {
        Commander.outputHelp();
        process.exit(1)
    }
}

main();