import { useEffect, useState } from "react";
import { ADD_MEMBER_FIELDS_CONFIG, CREATE_TEAM_CONFIG } from "../config";
import { Toaster } from "../components/Toast/toaster";
import { Card } from "../components/Card/Card";
import { useEmployeeData } from "../hooks/employeeDataContext";
import { DynamicSheet } from "../components/SideSheet/DynamicSheet";
import { mapEmployeesByDepartment } from "../utils/mapEmployeesByDepartment";

import { Sheet, SheetTrigger } from "../components/SideSheet/SideSheet";
import { FormData } from "../types/Fields.type";

export const Home = () => {
  const initialState: FormData = {
    name: "",
    phoneNumber: "",
    emailId: "",
    department: "",
    designation: "",
    team: "choose a Team",
  };

  // handle add/edit new member
  const onSubmitTeamMember = (formData) => {
    console.log(formData);
  };

  const { employeeData, dispatch } = useEmployeeData();
  const [employeeTransformedData, setEmployeeTransformedData] = useState({});

  useEffect(() => {
    setEmployeeTransformedData(mapEmployeesByDepartment(employeeData));
  }, [employeeData]);
  console.log("employeeTransformedData", employeeTransformedData);

  return (
    <main className="flex justify-center items-center flex-wrap gap-3">
      <div className="flex flex-col">
        {Object.keys(employeeTransformedData).map((department) => (
          <div key={department} className="mb-5">
            <div className="flex justify-between mb-1">
              <h2>{department}</h2>
              <div className="flex gap-3">
                <Sheet>
                  <SheetTrigger>Add New Team Member</SheetTrigger>
                  <DynamicSheet
                    department={department}
                    config={ADD_MEMBER_FIELDS_CONFIG}
                    initialState={initialState}
                    onSubmit={onSubmitTeamMember}
                  />
                </Sheet>

                <Sheet>
                  <SheetTrigger>Create Team</SheetTrigger>
                  <DynamicSheet
                    department={department}
                    config={CREATE_TEAM_CONFIG}
                    initialState={initialState}
                    onSubmit={onSubmitTeamMember}
                  />
                </Sheet>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              {employeeTransformedData[department].map((employee: any) => (
                <div key={employee.employeeId}>
                  <Card info={employee} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Toaster />
    </main>
  );
};
