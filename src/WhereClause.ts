import { Clause } from "./Clause";
import { Condition } from "./Condition";

export class WhereClause extends Clause {
  ClauseString = "WHERE";

  constructor(public children: Condition[]) {
    super(children);
  }
}
