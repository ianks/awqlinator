import { Clause } from "./Clause";

export class FromClause extends Clause {
  public ClauseString = "FROM";

  constructor(public children: [string]) {
    super(children);
  }
}
