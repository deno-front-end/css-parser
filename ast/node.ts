import type { Position } from "./token.ts";

export interface Rule {
  type: string;
  text?: string;
  selectors: string[];
  declarations: Rule[];
  rules?: Rule[];
  prefix?: string;
  position?: Position;
  name?: string;
  value?: string;
}
