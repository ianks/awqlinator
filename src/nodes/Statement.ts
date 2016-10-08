import * as Nodes from "./index";

export class Statement {
  constructor(private children: Nodes.Clause[]) {}

  public toString() {
    const orderedClauses = this.sortClausesByPrecedence(this.children);
    return orderedClauses.map(child => child.toString()).join(" ");
  }

  public cloneWithNewClauseAppended(clause: Nodes.Clause) {
    const newClauses = this.children.concat(clause);
    return new Statement(newClauses);
  }

  private sortClausesByPrecedence(clauses: Nodes.Clause[]) {
    return clauses.sort(this.comparePrecedence.bind(this));
  }

  private comparePrecedence(a: Nodes.Clause, b: Nodes.Clause) {
    const aPrecedence = this.precedenceFor(a);
    const bPrecedence = this.precedenceFor(b);

    return bPrecedence - aPrecedence;
  }

  private precedenceFor(clause: Nodes.Clause) {
    if (clause instanceof Nodes.SelectClause) {
      return 2;
    } else if (clause instanceof Nodes.FromClause) {
      return 1;
    } else {
      return 0;
    }
  }
}
