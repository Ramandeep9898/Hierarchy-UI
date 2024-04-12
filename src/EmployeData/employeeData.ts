import { v4 as uuid } from "uuid";

export const department = {
  "hr715d74-3241-48aa-8e0a-995029a76668": {
    deptName: "HR",
  },
  "er715d74-3241-48aa-8e0a-995029a76668": {
    deptName: "ENGINEERING",
  },
  "de715d74-3241-48aa-8e0a-995029a76668": {
    deptName: "DESIGN",
  },
  "ls715d74-3241-48aa-8e0a-995029d76668": {
    deptName: "LEADERSHIP",
  },
};

export const teams = {
  "ba715d74-3241-48aa-8e0a-995029f76668": {
    teamName: "Hello World!",
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
  },
  "cc715d74-3241-48aa-8e0a-995029f76668": {
    teamName: "Hello HR!",
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
  },
  "pp715d74-3241-48aa-8e0a-995029f76668": {
    teamName: "Hello design!",
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
  },
};

export const employees = [
  {
    employeeId: uuid(),
    name: "Ankur Pandey",
    email: "ankur@gmail.com",
    phoneNumber: "9999999999",
    designation: "CEO",
    teamId: null,
    deptId: "ls715d74-3241-48aa-8e0a-995029d76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "HOD of ER.",
    email: "hod.er@gmail.com",
    phoneNumber: "9999999999",
    designation: "HOD",
    teamId: null,
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Gagandeep Singh",
    email: "gagan@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_LEAD",
    teamId: "ba715d74-3241-48aa-8e0a-995029f76668",
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Ramandeep kaur",
    email: "raman@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_MEMBER",
    teamId: "ba715d74-3241-48aa-8e0a-995029f76668",
    deptId: "er715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },

  {
    employeeId: uuid(),
    name: "HOD of HR.",
    email: "hod.hr@gmail.com",
    phoneNumber: "9999999999",
    designation: "HOD",
    teamId: null,
    deptId: "hr715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Pooja Singh",
    email: "pooja@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_LEAD",
    teamId: "cc715d74-3241-48aa-8e0a-995029f76668",
    deptId: "hr715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Baldeep kaur",
    email: "raman@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_MEMBER",
    teamId: "cc715d74-3241-48aa-8e0a-995029f76668",
    deptId: "hr715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },

  {
    employeeId: uuid(),
    name: "HOD of DESIGN.",
    email: "hod.design@gmail.com",
    phoneNumber: "9999999999",
    designation: "HOD",
    teamId: null,
    deptId: "de715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Kritika Singh",
    email: "kritika@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_LEAD",
    teamId: "pp715d74-3241-48aa-8e0a-995029f76668",
    deptId: "de715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
  {
    employeeId: uuid(),
    name: "Ruby kaur",
    email: "ruby@gmail.com",
    phoneNumber: "9999999999",
    designation: "TEAM_MEMBER",
    teamId: "pp715d74-3241-48aa-8e0a-995029f76668",
    deptId: "de715d74-3241-48aa-8e0a-995029a76668",
    isDeleted: false,
  },
];
