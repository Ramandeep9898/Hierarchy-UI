import { useContext, createContext, useReducer } from "react";
import { employees, teams, department } from "../EmployeData/employeeData";
import { addMember, createTeam } from "../utils/datamodelutils";

const employeeReducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "ADD_MEMBER":
      // Call addMember function with proper arguments
      const updatedState = {
        ...state,
        employees: [...state.employees], // Make a copy of the employees array
      };
      addMember(action.formData, updatedState); // Pass memberData and updatedState
      return updatedState; // Return the updated state
    case "CREATE_TEAM":
      // Call addMember function with proper arguments
      const updatedStateTeam = {
        ...state,
        teams: state.teams, // Make a copy of the employees array
      };
      console.log("CTT", action.formData);
      
      createTeam(action.formData, updatedStateTeam); // Pass memberData and updatedState
      return updatedStateTeam; // Return the updated state      
    default:
      return state;
  }
};

const EmployeeDataContext = createContext({});

const EmployeeDataProvider = ({ children }) => {
  const [employeeData, dispatch] = useReducer(employeeReducerFunc, {
    employees: employees,
    teams: teams,
    department: department,
  });

  return (
    <EmployeeDataContext.Provider value={{ employeeData, dispatch }}>
      {children}
    </EmployeeDataContext.Provider>
  );
};

const useEmployeeData = () => useContext(EmployeeDataContext);

export { useEmployeeData, EmployeeDataProvider };
