import { EmployeeIcon, ClipboardListIcon } from "../../public/assets/icons";

type MenuItem = {
  text: string;
  icon: React.ReactNode;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    text: "Employees",
    icon: <EmployeeIcon />,
    path: "/employees",
  },
];
