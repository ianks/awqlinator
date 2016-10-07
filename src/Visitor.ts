import { Statement } from './Statement';

export class Visitor {
  constructor(private statement: Statement) {}

  visit() {
    return this.statement.children.map(child => child.toString());
  }

  toString() {
    return this.visit().join(" ");
  }
}
