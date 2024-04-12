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
  console.log("memberData Id", memberData.teamId);
  console.log("employeeData", employeeData);
  const { teams, employees } = employeeData;
  const departmentId = teams[memberData?.teamId]?.deptId;
  console.log("departmentId", departmentId);

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

  console.log("New Member Added:", employees, memberData);
};
