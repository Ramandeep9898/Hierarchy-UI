export const ADD_MEMBER_FIELDS_CONFIG = [
  {
    name: "nameId",
    label: "Name ID",
    inputType: "text",
    element: "input",
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    inputType: "number",

    element: "input",
    required: true,
  },
  {
    name: "emailId",
    label: "Email",
    inputType: "email",

    element: "input",
    required: true,
  },
  {
    name: "department",
    label: "Department",
    element: "chip",
    required: true,
    options: [
      {
        name: "headOfStaff",
        value: "Head of Staff/HR",
      },
      {
        name: "headOfEngineering",
        value: "Head of Engineering",
      },
      {
        name: "headOfDesign",
        value: "Head of Design",
      },
    ],
  },
  {
    name: "position",
    label: "Position",
    element: "chip",
    required: true,
    options: [
      {
        name: "teamLead",
        value: "Team Lead",
      },
      {
        name: "teamMember",
        value: "Team Member",
      },
    ],
  },
];
