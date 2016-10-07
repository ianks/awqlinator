import { Clause } from "./Clause";
import { DateRange } from "./Types";

export class DuringClause extends Clause {
  ClauseString = "DURING";

  constructor(public children: [DateRange]) {
    super(children);
  }

  toString() {
    return this.ClauseString + " " + this.children.join(",");
  }
}

