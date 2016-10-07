import { Clause } from "./Clause";

export class FromClause extends Clause {
  ClauseString = "FROM";

  constructor(public children: [string]) {
    super(children);
  }
}
