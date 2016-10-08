import { ColumnName, OrderingOperator } from "./Types";

export class Ordering {
  constructor(private children: [ColumnName, OrderingOperator]) {}

  public toString() {
    return this.children.join(" ");
  }
}
