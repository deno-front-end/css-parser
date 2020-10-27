export interface Position {
  line: number;
  col: number;
}

export interface Token {
  type?: string;
  start?: Position;
  end?: Position;
  position?: {
    start?: Position;
    end?: Position;
  };
  prefix?: string;
  name?: string;
  text?: string;
  value?: string;
}
