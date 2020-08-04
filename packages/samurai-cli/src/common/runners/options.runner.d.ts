export declare class RunnersOption {
    private name;
    private value;
    constructor(name: string, value: boolean | string);
    getName(): string;
    getValue(): string | boolean;
    toCommandString(): string;
    private format;
}
