import { SpawnOptions, ChildProcess, spawn } from "child_process";


export class AbstractRunner {
    constructor(protected binary: string) { }

    private transformCommandMessage(message: string) {
        return message.replace(/\r\n|\n/, "");
    }

    public async run(
        command: string,
        collect = false,
        cwd: string = process.cwd()
    ) {
        const args: string[] = [command];
        const options: SpawnOptions = {
            cwd,
            stdio: collect ? "pipe" : "inherit",
            shell: true,
        };
        return new Promise<null | string>((resolve, rejects) => {
            const child: ChildProcess = spawn(`${this.binary}`, args, options);
            if (collect) {
                child.stdout!.on("data", (data) => resolve(this.transformCommandMessage(data.toString())));
            }
            child.on("close", (code) => {
                switch (code) {
                    case 0:
                        resolve(null);
                        break;
                    case 1:
                        rejects();
                    default:
                        resolve(null);
                        break;
                }
            })
        })
    }
}