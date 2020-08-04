import { Runner, SchematicRunner, GulpRunner } from ".";
export declare class FactoryRunner {
    static create(runner: Runner): SchematicRunner | GulpRunner | undefined;
}
