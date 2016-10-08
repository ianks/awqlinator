import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("FromClause", () => {
    it("correctly renders a FromClause", () => {
      const clause = new Nodes.FromClause(["ACCOUNT_PERFORMANCE_REPORT"]);
      const result = clause.toString();

      expect(result).to.eql("FROM ACCOUNT_PERFORMANCE_REPORT");
    });
  });
});
