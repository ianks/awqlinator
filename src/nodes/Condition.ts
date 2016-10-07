import { ColumnName, Operator, Value } from './Types';

export class Condition {
  constructor(private children: [ColumnName, Operator, Value]) {}

  toString() {
    return this.children.join(" ");
  }
}

