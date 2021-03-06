import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";
import { oneLine } from "common-tags";

describe("nodes", () => {
  describe("Statement", () => {
    it("correctly renders a collection of Clauses", () => {
      const statement = new Nodes.Statement([
        new Nodes.SelectClause([
          new Nodes.Selection(["Clicks", "Impressions"]),
        ]),
        new Nodes.FromClause(["ACCOUNT_PERFORMANCE_REPORT"]),
        new Nodes.WhereClause([
          new Nodes.Condition(["Clicks", ">", "20"]),
        ]),
        new Nodes.DuringClause(["20160901", "20161001"]),
        new Nodes.OrderByClause([
          new Nodes.Ordering(["Clicks", "ASC"]),
        ]),
      ]);
      const result = statement.toString();

      expect(result).to.eql(oneLine`
        SELECT Clicks,Impressions
        FROM ACCOUNT_PERFORMANCE_REPORT
        WHERE Clicks > 20
        DURING 20160901,20161001
        ORDER BY Clicks ASC
      `);
    });
  });
});
