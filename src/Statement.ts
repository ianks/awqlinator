import { Clause } from './Clause';

export class Statement {
  children: Clause[];

  constructor(...children: Clause[]) {
    this.children = children;
  }
}
