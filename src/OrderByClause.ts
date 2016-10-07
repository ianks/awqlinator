import { Clause } from "./Clause";
import { Ordering } from "./Ordering";

export class OrderByClause extends Clause {
  ClauseString = "ORDER BY";

  constructor(public children: [Ordering]) {
    super(children);
  }
}
