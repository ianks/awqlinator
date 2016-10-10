import * as Nodes from "./nodes/index";
import * as Types from "./nodes/Types";

export class AWQLinator {
  private statement: Nodes.Statement;

  constructor(sourceName?: Types.SourceName, statement?: Nodes.Statement) {
    if (statement != null) {
      this.statement = statement;
    } else {
      if (sourceName != null)  {
        const fromClause = new Nodes.FromClause([sourceName]);
        const newStatement = new Nodes.Statement([fromClause]);
        this.statement = newStatement;
      } else {
        throw new Error("Cannot iniitialize AWQLinator without sourceName or statement");
      }
    }
  }

  public select(...columns: Types.ColumnList) {
    const selection = new Nodes.Selection(columns);
    const selectClause = new Nodes.SelectClause([selection]);

    return this.newWithAppendedClause(selectClause);
  }

  public where(columnName: Types.ColumnName, operator: Types.Operator, value: Types.Value) {
    const condition = new Nodes.Condition([columnName, operator, value]);
    const whereClause = new Nodes.WhereClause([condition]);

    return this.newWithAppendedClause(whereClause);
  }

  public during(dateRange: Types.DateRange) {
    const duringClause = new Nodes.DuringClause([dateRange]);

    return this.newWithAppendedClause(duringClause);
  }

  public order(columnName: Types.ColumnName, orderingOperator: Types.OrderingOperator) {
    const ordering = new Nodes.Ordering([columnName, orderingOperator]);
    const orderByClause = new Nodes.OrderByClause([ordering]);

    return this.newWithAppendedClause(orderByClause);
  }

  public limit(amount: number) {
    const limitClause = new Nodes.LimitClause([amount]);

    return this.newWithAppendedClause(limitClause);
  }

  public toAwql() {
    return this.statement.toString();
  }

  private newWithAppendedClause(clause: Nodes.Clause) {
    const statement = this.statement.cloneWithNewClauseAppended(clause);

    return new AWQLinator(undefined, statement);
  }
}
