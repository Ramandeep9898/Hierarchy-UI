import { SheetContent, SheetTitle, SheetHeader } from "./SideSheet";
import { FormData, Field } from "../../types/Fields.type";
import { Chip } from "../Chip/Chip";
import { Input } from "../Input/Input";
import { Dropdown } from "../DropDown/DropDown";
import { v4 as uuid } from "uuid";

import { useState } from "react";

type SheetPropsTypes = {
  department: string;
  config: any;
  initialState: any;
  onSubmit: any;
};

export const DynamicSheet = ({
  department,
  config,
  initialState,
  onSubmit,
  flag,
}: SheetPropsTypes) => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleInput = (key: string, value: string, teamId?: string) => {
    if (flag === "createTeam") {
      setFormData({
        ...formData,
        [key]: value,
        teamId: teamId || uuid(),
        department: department,
      }); // Set teamId in formData
    } else {
      setFormData({ ...formData, [key]: value, teamId: teamId || uuid() }); // Set teamId in formData
    }
  };

  // this component dynamically return components acc to config
  const DynamicComponentReturn: React.FC<{ field: Field }> = ({ field }) => {
    const componentOption: { [key: string]: JSX.Element } = {
      chip: <Chip chipInfo={field} onChange={handleInput} />,

      dropdown: (
        <Dropdown
          label={field.label}
          name={formData[field.name]}
          initialDropdownValue={field.initialDropdownValue}
          onSelect={handleInput}
          dept={department}
        />
      ),
      input: (
        <Input
          label={field.label}
          name={field.name}
          value={formData[field.name]}
          type={field.inputType || "text"}
          required={field.required || false}
          onChange={handleInput}
        />
      ),
    };

    return componentOption[field.element];
  };

  return (
    <SheetContent className="bg-white w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Add new Member to {department}</SheetTitle>
        <div className="flex flex-col gap-8">
          {config.map((field) => (
            <div className="" key={field.name}>
              {DynamicComponentReturn({ field })}
            </div>
          ))}
        </div>
      </SheetHeader>
      <button
        className="w-full mt-6 bg-[#333] rounded-lg p-2 text-white"
        onClick={() => onSubmit({ formData })}
      >
        Add
      </button>
    </SheetContent>
  );
};
