export interface ISelect {
  label: string;
  options: { label: string; value: string }[];
}

export interface Data {
  id: number;
  employeeName: string;
  employeeEmail: string;
  employeeImage: string;
  jobTitle: string;
  lineManager: string;
  departament: string;
  office: string;
  employeeStatus: string;
  account: string;
  selected: boolean;
}

export interface Column {
  id: keyof Data;
  label: string;
  // render: (row: any) => React.ReactNode;
}

export interface ITable {
  data: any[];
  columns: Column[];
  selection?: boolean;
  pagination?: boolean;
  action?: boolean;
}

export type Anchor = "employee" | "left" | "bottom" | "right";

export interface ISidebarContext {
  isOpen: {
    employee: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  toggleSidebar: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface ISidebar {
  heading: string;
  children: React.ReactNode;
  anchor: Anchor;
}

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}