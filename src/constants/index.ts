import { Column, Data } from "@/interfaces";
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

export const statusArr = [
  { label: "All Status", value: "All Status" },
  { label: "Active", value: "Active" },
  { label: "On Boarding", value: "On Boarding" },
  { label: "Probation", value: "Probation" },
  { label: "On Leave", value: "On Leave" },
];

export const mockData: Data[] = [
  {
    id: 1,
    employeeName: "John Doe",
    employeeEmail: "john.doe@company.com",
    employeeImage: "https://example.com/image1.jpg",
    jobTitle: "Software Engineer",
    lineManager: "Manager 1",
    departament: "Engineering",
    office: "Office 1",
    employeeStatus: "active",
    account: "Account 1",
    selected: false,
  },
  {
    id: 2,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 3,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 4,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 5,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 6,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "active",
    account: "Account 2",
    selected: false,
  },
  {
    id: 7,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 8,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 9,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 10,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
];

export const columns: Column[] = [
  {
    id: "employeeName",
    label: "Employee Name",
    // render: (row) => (
    //   <Stack direction="row" spacing={1}>
    //     <Avatar src="/avatar.png" />
    //     <Box>
    //       <Typography variant="body2">{row.employeeName}</Typography>
    //       <Typography color="textSecondary" variant="caption" display="block">
    //         {row.employeeEmail}
    //       </Typography>
    //     </Box>
    //   </Stack>
    // ),
  },
  {
    id: "jobTitle",
    label: "Job Title",
    // render: (row) => `${row.jobTitle}`,
  },
  {
    id: "lineManager",
    label: "Line Manager",
    // render: (row) => `${row.lineManager}`,
  },
  {
    id: "departament",
    label: "Departament",
    // render: (row) => `${row.departament}`,
  },
  {
    id: "office",
    label: "Office",
    // render: (row) => `${row.office} `,
  },
  {
    id: "employeeStatus",
    label: "Employee Status",
    // render: (row) => ` ${row.employeeStatus}`,
  },
  {
    id: "account",
    label: "Account",
    // render: (row) => `${row.account}`,
  },
];
