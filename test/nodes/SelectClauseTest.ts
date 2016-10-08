import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("SelectClause", () => {
    it("correctly renders a SelectClause with multiple selections", () => {
      const clause = new Nodes.SelectClause([
        new Nodes.Selection(["Clicks"]),
        new Nodes.Selection(["Impressions"]),
      ]);
      const result = clause.toString();

      expect(result).to.eql("SELECT Clicks,Impressions");
    });

    it("correctly renders a SelectClause with a single selection", () => {
      const clause = new Nodes.SelectClause([
        new Nodes.Selection(["Clicks"]),
      ]);
      const result = clause.toString();

      expect(result).to.eql("SELECT Clicks");
    });
  });
});
