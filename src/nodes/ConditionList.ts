import { Condition } from "./Condition";

export class ConditionList {
  constructor(private children: Condition[]) {}

  public toString() {
    return this.children.map(child => child.toString()).join(" AND ");
  }
}
