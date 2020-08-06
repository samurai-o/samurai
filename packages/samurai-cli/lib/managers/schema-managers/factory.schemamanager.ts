import { SchemaManager } from './interface';
export class FactorySchemaManages {
    public static create(managers) {
        switch (managers) {
            case SchemaManager.SAMURAI:
                break;

            default:
                break;
        }
    }
}