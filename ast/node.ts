export interface Rule {
  type: "rule";
  selectors: string[];
  declarations: Decl[];
}

export interface Decl {
  type?: string;
  name?: string;
  value?: string;
}
