import { Clause } from "./Clause";

export class Statement {
  constructor(private children: [Clause]) {}

  public toString() {
    return this.children.map(child => child.toString()).join(" ");
  }
}
