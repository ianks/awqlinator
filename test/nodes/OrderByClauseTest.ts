import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("OrderByClause", () => {
    it("correctly renders an OrderByClause for ascending", () => {
      const clause = new Nodes.OrderByClause([
        new Nodes.Ordering(["Clicks", "ASC"]),
      ]);
      const result = clause.toString();

      expect(result).to.eql("ORDER BY Clicks ASC");
    });

    it("correctly renders an OrderByClause for descending", () => {
      const clause = new Nodes.OrderByClause([
        new Nodes.Ordering(["Impressions", "DESC"]),
      ]);
      const result = clause.toString();

      expect(result).to.eql("ORDER BY Impressions DESC");
    });
  });
});
