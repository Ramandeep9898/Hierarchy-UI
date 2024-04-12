import { useContext, createContext, useReducer } from "react";
import { employees, teams, department } from "../EmployeData/employeeData";
import { addMember } from "../utils/datamodelutils";

const employeeReducerFunc = (state, action) => {
  console.log("DISPATCH", state, action);
  
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "ADD_MEMBER":
      console.log("HEEEE");
      addMember(action , state)
      return state
      // return addMember(action , "state")
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
