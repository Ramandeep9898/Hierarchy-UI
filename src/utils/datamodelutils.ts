import { v4 as uuid } from "uuid";

export const getTeamByDepartmentName = (
  departmentName: string,
  employeeData: any
) => {
  const { department } = employeeData;
  for (let key of Object.keys(department)) {
    let data = department[key];
    if (departmentName === data.deptName) {
      return getTeamByDeptId(key, employeeData);
    }
  }
};

export const getTeamByDeptId = (deptId: string, employeeData: any) => {
  const { teams } = employeeData;
  let teamsData = [];
  for (let key of Object.keys(teams)) {
    let data = teams[key];
    if (deptId === data.deptId) {
      teamsData.push(data);
    }
  }
  return teamsData;
};

export const addMember = (memberData, employeeData) => {
  "memberData Id", memberData.teamId;
  "employeeData", employeeData;
  const { teams, employees } = employeeData;
  const departmentId = teams[memberData?.teamId]?.deptId;
  "departmentId", departmentId;

  // Construct the new member object with all required properties
  const newMember = {
    employeeId: uuid(),
    name: memberData.name,
    email: memberData.email,
    phoneNumber: memberData.phoneNumber,
    designation: memberData.designation,
    teamId: memberData.teamId,
    deptId: departmentId,
    isDeleted: false,
  };

  // Push the new member object to the employees array
  employees.push(newMember);
  localStorage.setItem("employees", JSON.stringify(employees));

  "New Member Added:", employees, memberData;
};

export const createTeam = (teamData, employeeData) => {
  const { teams, department } = employeeData;
  const departmentId = getDepartmentByDeptName(teamData.department, department);

  // Construct the new team object with all required properties
  const newTeam = { ...teamData, deptId: departmentId };

  // Push the new team object to the employees array
  teams[teamData.teamId] = newTeam;
  localStorage.setItem("teams", JSON.stringify(teams));
};

export const getDepartmentByDeptName = (deptName, department) => {
  for (let key of Object.keys(department)) {
    let data = department[key];
    if (deptName === data.deptName) {
      return key;
    }
  }
};
