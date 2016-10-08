import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("DuringClause", () => {
    it("correctly renders a WhereClause with a single DateLiteral", () => {
      const clause = new Nodes.DuringClause(["TODAY"]);
      const result = clause.toString();

      expect(result).to.eql("DURING TODAY");
    });

    it("correctly renders a WhereClause with a DateRange", () => {
      const clause = new Nodes.DuringClause(["20160901", "20161001"]);
      const result = clause.toString();

      expect(result).to.eql("DURING 20160901,20161001");
    });
  });
});
