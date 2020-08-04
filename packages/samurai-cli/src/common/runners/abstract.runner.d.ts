export declare class AbstractRunner {
    protected binary: string;
    constructor(binary: string);
    static getModulePaths(): string[];
    static findCommandBinary(name: string): string;
    private transformCommandMessage;
    run(command: string, collect?: boolean, cwd?: string): Promise<string | null>;
}
