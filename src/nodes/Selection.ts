import { ColumnList } from './Types';

export class Selection {
  children: ColumnList;

  constructor(children: ColumnList) {
    this.children = children;
  }

  toString() {
    return this.children.join(",");
  }
}
