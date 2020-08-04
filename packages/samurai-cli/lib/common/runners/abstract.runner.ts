import { SpawnOptions, ChildProcess, spawn } from "child_process";
import { join, resolve } from "path";
import { existsSync } from "fs";

export class AbstractRunner {
  constructor(protected binary: string) {}

  public static getModulePaths() {
    return module.paths;
  }

  public static findCommandBinary(name: string): string {
    const subPath = join(".bin", name);
    for (const path of this.getModulePaths()) {
      const binaryPath = resolve(path, subPath);
      if (existsSync(binaryPath)) {
        return binaryPath;
      }
    }

    throw new Error("'schematics' binary path could not be found!");
  }

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
        child.stdout!.on("data", (data) =>
          resolve(this.transformCommandMessage(data.toString()))
        );
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
      });
    });
  }
}
