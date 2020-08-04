/// <reference types="node" />
import { PathLike } from "fs";
export interface IUIConfig {
    include: PathLike[];
    docs: PathLike;
}
