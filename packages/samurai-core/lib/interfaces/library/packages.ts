import { PathLike } from "fs";

export interface IUIConfig {
    include: PathLike[]; // 包含文档输出的部分
    docs: PathLike; // 文档输出路径
}