import { Input } from '../commands';
import { AbstractAction } from '.';

export class NewAction extends AbstractAction {
    public async handler(inputs: Input[], options: Input[]) {

    }
}

async function generatePackageFiles(inputs: Input[]) {
    // const collectionOption = inputs.find((option) => option.name == "collection")!
    //     .value as string;
    // const collection: AbstractSchematicsManager = SchematicsManagerFactory.create(
    //     collectionOption
    // );
    // const RunnersOptions: RunnersOption[] = mapRunnersOptions(inputs);
    // try {
    //     const schematicInput = inputs.find((input) => input.name === "schematic");
    //     if (!schematicInput) {
    //         throw new Error("Unable to find a schematic for this configuration");
    //     }
    //     await collection.execute(schematicInput.value as string, RunnersOptions);
    // } catch (error) {
    //     if (error && error.message) {
    //         //   console.error(chalk.red(error.message));
    //     }
    // }
}

const mapRunnersOptions = (inputs: Input[]) => {

}