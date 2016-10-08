import { Clause } from "./Clause";
import { DateRange } from "./Types";

export class DuringClause extends Clause {
  public ClauseString = "DURING";

  constructor(public children: [DateRange]) {
    super(children);
  }

  public toString() {
    return this.ClauseString + " " + this.children.join(",");
  }
}
