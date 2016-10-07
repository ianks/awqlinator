import { Condition } from "./Condition";

export class ConditionList {
  constructor(public children: Condition[]) {}

  toString() {
    return this.children.map(child => child.toString()).join(" AND ");
  }
}
