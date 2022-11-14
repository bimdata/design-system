declare namespace BIMDataTable {
  type Columns = string[] | Column[];
  type Rows = string[][] | Object[];

  interface Data {
    columns: Columns;
    rows: Rows;
  }

  interface Style {
    tableWidth?: string;
    tableLayout?: string;
    rowHeight?: number;
    placeholder?: string;
  }

  interface Config {
    rowKey?: string;
    selectable?: boolean;
    sortable?: boolean;
    paginated?: boolean;
    perPage?: number;
  }

  interface Column {
    id: string;
    type?: "number" | "string" | "enum" | "boolean" | "date";
    label?: string;
    width?: string;
    align?: "left" | "center" | "right";
    sort?: (a: any, b: any) => number;
  }
}
