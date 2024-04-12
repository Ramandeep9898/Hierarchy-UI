import { v4 as uuid } from "uuid";

export const getTeamByDepartmentName = (departmentName: string, employeeData: any) => {
    const { department } = employeeData;
    for(let key of Object.keys(department)){
        let data = department[key]
        if(departmentName === data.deptName){
            return getTeamByDeptId(key, employeeData)
        }
    }

}

export const getTeamByDeptId = (deptId: string, employeeData: any) => {
    const { teams } = employeeData;
    let teamsData = []
    for(let key of Object.keys(teams)){
        let data = teams[key]
        if(deptId === data.deptId){
            teamsData.push(data)
        }
    }
    return teamsData
}

export const addMember = (memberData: any, employeeData: any) => {
    const { teams, employees } = employeeData;
    let departmentId = teams[memberData.teamId]?.deptId
    employees.push({...memberData, 'deptId': departmentId, 'employeeId': uuid()})
    console.log("ADD_MEMBER" ,memberData, employeeData);
    console.log("EMPS", employees);
}