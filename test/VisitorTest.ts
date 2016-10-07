import * as AWQLizer from "./../src/index";
import { expect } from "chai";
import { oneLine } from "common-tags";

describe("AWQLizer", () => {
  describe("Visitor", () => {
    it("correctly renders an AWQLizer statement", () => {
      const statement = new AWQLizer.Statement(
        new AWQLizer.SelectClause([
          new AWQLizer.Selection(["Clicks", "Impressions"]),
        ]),
        new AWQLizer.FromClause(["ACCOUNT_PERFORMANCE_REPORT"]),
        new AWQLizer.WhereClause([
          new AWQLizer.Condition(["Clicks", ">", "20"]),
        ]),
        new AWQLizer.DuringClause(["20160901", "20161001"]),
        new AWQLizer.OrderByClause([
          new AWQLizer.Ordering(["Clicks", "ASC"]),
        ]),
      );
      const visitor = new AWQLizer.Visitor(statement);
      const result = visitor.toString();

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
