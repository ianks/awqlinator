interface Children {
  toString(): string;
}

export abstract class Clause {
  ClauseString: string;

  constructor(public children: Children[]) {}

  toString() {
    return this.ClauseString + " " + this.children.map(child => child.toString()).join(" ");
  }
}
