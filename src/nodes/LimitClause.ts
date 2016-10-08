import { Clause } from "./Clause";

export class LimitClause extends Clause {
  public ClauseString = "LIMIT";

  constructor(public children: [number]) {
    super(children);
  }
}
