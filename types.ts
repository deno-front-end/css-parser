type Type = 'stylesheet';

export interface AST {
  type: Type;
  stylesheet: {
    rules: Rule[]
  }
}

export interface Rule {
    type: 'rule';
    selectors: string[];
    declarations: Decl[]
}

export interface Decl {
  type?: string;
  name?: string;
  value?: string;
}

export interface Token {
    type?: string,
    start?: {
      line: number,
      col : number
    };
    end?: {
      line: number,
      col : number
    };
    position?: {
      start?: {
        line: number,
        col : number
      };
      end?: {
        line: number,
        col : number
      };
    };
    prefix?: string;
    name?: string;
    text?: string;
    value?: string;
}
