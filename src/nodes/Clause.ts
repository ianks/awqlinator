export interface IChildren {
  toString(): string;
}

export abstract class Clause {
  public ClauseString: string;

  constructor(public children: IChildren[]) {}

  public toString() {
    return this.ClauseString + " " + this.children.map(child => child.toString()).join(" ");
  }
}
