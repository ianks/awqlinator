import { Clause } from "./Clause";
import { Ordering } from "./Ordering";

export class OrderByClause extends Clause {
  public ClauseString = "ORDER BY";

  constructor(public children: [Ordering]) {
    super(children);
  }
}
