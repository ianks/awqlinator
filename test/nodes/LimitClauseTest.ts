import * as Nodes from "./../../src/nodes/index";
import { expect } from "chai";

describe("nodes", () => {
  describe("LimitClause", () => {
    it("correctly renders a LimitClause", () => {
      const clause = new Nodes.LimitClause([10]);
      const result = clause.toString();

      expect(result).to.eql("LIMIT 10");
    });
  });
});
