import { useContext, createContext, useReducer } from "react";
import { employees, teams, department } from "../EmployeData/employeeData";

const employeeReducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
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
