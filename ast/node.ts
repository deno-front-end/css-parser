import { Position } from "./token.ts";

export interface Rule {
  type: string;
  text?: string;
  selectors: string[];
  declarations: Decl[];
  position?: Position;
}

export interface Decl {
  type?: string;
  name?: string;
  value?: string;
}
