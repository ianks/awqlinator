import { Clause } from "./Clause";
import { SourceName } from "./Types";

export class FromClause extends Clause {
  public ClauseString = "FROM";

  constructor(public children: [SourceName]) {
    super(children);
  }
}
