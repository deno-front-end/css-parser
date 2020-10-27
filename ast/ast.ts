import { Rule } from "./node.ts";

type Type = "stylesheet";

export interface AST {
  type: Type;
  stylesheet: {
    rules: Rule[];
  };
}
