import type { Position } from "./token.ts";

export type NodeType =
  | "rule"
  | "keyframes"
  | "media"
  | "charset"
  | "import"
  | "font-face"
  | "viewport"
  | "page"
  | "supports"
  | "document"
  | "property"
  | "comment";
export type Node = {
  type: NodeType;

  position?: Position;
};

export type SelectorRule =
  & Node
  & {
    type: "rule";

    selectors: string[];
    declarations: Decl[];
    prefix?: string;
  };

export type AtRule =
  & Node
  & (
    | {
      type: "keyframes" | "media";

      name: string;
      prefix?: string;
      rules: SelectorRule[];
    }
    | {
      type: "charset" | "import";

      name: string;
      value: string;
    }
    | {
      type: "font-face" | "viewport" | "page" | "supports" | "document";

      prefix?: string;
      declarations: Decl[];
    }
  );

export type Decl =
  & Node
  & (
    | {
      type: "property";

      name?: string;
      value?: string;
    }
    | {
      type: "comment";

      text: string;
    }
  );

export type Rule = SelectorRule | AtRule | Decl;