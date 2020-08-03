import { Arguments, Argv } from "yargs";
import ICommand from "../ICommand";
import ICommandParam from "../ICommandParam";

const params: ICommandParam[] = [
  {
    name: "root",
    options: {
      alias: "r",
      type: "string",
      description: "MAM Channel's root"
    }
  },
  {
    name: "sidekey",
    options: {
      type: "string",
      description: "Sidekey for restricted channels",
      default: null
    }
  }, {
    name: "limit",
    options: {
      alias: "l",
      type: "number",
      description: "Maximum number of messages to be fetched"
    }
  },
  {
    name: "from",
    options: {
      alias: "f",
      type: "number",
      description: "Start Index for retrieval"
    }
  },
  {
    name: "seed",
    options: {
      alias: "s",
      type: "string",
      description: "MAM Channel's seed"
    }
  },
  {
    name: "chunksize",
    options: {
      type: "number",
      description: "Chunksize for retrieval"
    }
  },
  {
    name: "partitions",
    options: {
      type: "number",
      description: "Number of partitions to use when fetching",
      default: 1
    }
  },
  {
    name: "combined",
    options: {
      type: "boolean",
      description: "MAM Fetch Combined",
      default: false
    }
  }
];

export default class FetchMamCommand implements ICommand {
  public subCommands: null;
  public name: "fetch";

  public execute(args: Arguments): boolean {
    return true;
  }

  public register(yargs: Argv): void {
    params.forEach(aParam => {
      yargs.option(aParam.name, aParam.options);
    });
  }
}
