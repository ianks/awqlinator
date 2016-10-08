import { ColumnList } from "./Types";

export class Selection {
  constructor(private children: ColumnList) {}

  public toString() {
    return this.children.join(",");
  }
}
