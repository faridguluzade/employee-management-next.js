import { EmployeeIcon, ClipboardListIcon } from "../../public/assets/icons";

type MenuItem = {
  text: string;
  path: string;
};

export const menuItems: MenuItem[] = [
  {
    text: "Employees",
    path: "/employees",
  },
  {
    text: "Checklist",
    path: "/checklist",
  },
  {
    text: "Time Off",
    path: "/time-off",
  },
  {
    text: "Attendance",
    path: "/attendance",
  },
  {
    text: "Setting",
    path: "/setting",
  },
];
