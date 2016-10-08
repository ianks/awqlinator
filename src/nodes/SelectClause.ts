import { Clause } from "./Clause";
import { Selection } from "./Selection";

export class SelectClause extends Clause {
  public ClauseString = "SELECT";

  constructor(public children: [Selection]) {
    super(children);
  }

  public toString() {
    const stringifiedChildren = this.children.map(child => child.toString()).join(",");

    return this.ClauseString + " " + stringifiedChildren;
  }
}
