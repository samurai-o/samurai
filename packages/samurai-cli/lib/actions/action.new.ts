import { Input } from "../commands";
import { AbstractAction } from ".";
import {
  AbstractSchematicsManager,
  FactorySchematicsManager,
  Schematics,
} from "lib/common/managers/schematics-manager";
import { RunnersOption } from "lib/common";

export class NewAction extends AbstractAction {
  public async handler(inputs: Input[], options: Input[]) {}
}

async function generatePackageFiles(inputs: Input[]) {
  const collectionOption = inputs.find((option) => option.name == "collection")!
    .value as Schematics;
  const collection: AbstractSchematicsManager = FactorySchematicsManager.create(
    collectionOption
  );
  const RunnersOptions: RunnersOption[] = mapRunnersOptions(inputs);
  try {
    const schematicInput = inputs.find((input) => input.name === "schematic");
    if (!schematicInput) {
      throw new Error("Unable to find a schematic for this configuration");
    }
    await collection.execute(schematicInput.value as string, RunnersOptions);
  } catch (error) {
    if (error && error.message) {
      //   console.error(chalk.red(error.message));
    }
  }
}

const mapRunnersOptions = (inputs: Input[]) => {
  const exclude: string[] = [];
  return inputs.reduce((target: RunnersOption[], source: Input) => {
    const { name, value } = source;
    if (!exclude.includes(name)) {
      target.push(new RunnersOption(name, value));
    }
    return target;
  }, []);
};
