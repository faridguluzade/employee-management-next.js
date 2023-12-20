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
