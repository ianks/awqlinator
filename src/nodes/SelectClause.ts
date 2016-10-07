import { Clause } from "./Clause";
import { Selection } from "./Selection";

export class SelectClause extends Clause {
  ClauseString = "SELECT";

  constructor(public children: [Selection]) {
    super(children);
  }

  toString() {
    const stringifiedChildren = this.children.map(child => child.toString()).join(" ");

    return this.ClauseString + " " + stringifiedChildren;
  }
}
