export type ColumnList = ColumnName[]
export type ColumnName = Literal;
export type DateRange  = DateRangeLiteral | DateString | [DateString, DateString];
export type DateRangeLiteral =
  "TODAY" |
  "YESTERDAY" |
  "LAST_7_DAYS" |
  "THIS_WEEK_SUN_TODAY" |
  "THIS_WEEK_MON_TODAY" |
  "LAST_WEEK";
export type DateString = string;
export type Literal = string;
export type Operator =
  "=" |
  "!=" |
  ">" |
  ">=" |
  "<" |
  "<=" |
  "IN" |
  "NOT_IN" |
  "STARTS_WITH" |
  "STARTS_WITH_IGNORE_CASE" |
  "CONTAINS" |
  "CONTAINS_IGNORE_CASE" |
  "DOES_NOT_CONTAIN" |
  "DOES_NOT_CONTAIN_IGNORE_CASE" |
  "CONTAINS_ANY" |
  "CONTAINS_NONE" |
  "CONTAINS_ALL";
export type OrderingOperator = "ASC" | "DESC";
export type PageSize = number;
export type SourceName = Literal;
export type StartIndex = number;
export type StringDoubleQ = string;
export type StringList = string[] ;
export type StringSingleQ = string;
export type Value = ValueLiteral | String | ValueLiteralList | StringList
export type ValueLiteral = string;
export type ValueLiteralList = ValueLiteral[];
