import { Clause } from "./Clause";

export class LimitClause extends Clause {
  static ClauseString = "LIMIT";

  constructor(public children: [number]) {
    super(children);
  }
}
