import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("WhereClause", () => {
    it("correctly renders a WhereClause", () => {
      const clause = new Nodes.WhereClause([
        new Nodes.Condition(["Clicks", ">", "20"]),
      ]);
      const result = clause.toString();

      expect(result).to.eql("WHERE Clicks > 20");
    });
  });
});
