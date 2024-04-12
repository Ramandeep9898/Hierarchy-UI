import { SheetContent, SheetTitle, SheetHeader } from "./SideSheet";
import { ADD_MEMBER_FIELDS_CONFIG } from "../../config";
import { FormData, Field } from "../../types/Fields.type";
import { Chip } from "../Chip/Chip";
import { Input } from "../Input/Input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../DropDown/DropDown";

import { useState } from "react";

type SheetPropsTypes = {
  department: string;
  config: any;
  initialState: any;
};

export const DynamicSheet = ({
  department,
  config,
  initialState,
}: SheetPropsTypes) => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleInput = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  };

  // this component dynamically return components acc to config
  const DynamicComponentReturn: React.FC<{ field: Field }> = ({ field }) => {
    const componentOption: { [key: string]: JSX.Element } = {
      chip: <Chip chipInfo={field} onChange={handleInput} />,

      dropdown: (
        <DropdownMenu>
          <div className="flex flex-col items-start w-full">
            <div className="text-gray-500 text-sm mb-1">{field.label}</div>
            <DropdownMenuTrigger className="border-[#333] w-full border-2 border-b-4 px-6 py-2 rounded-lg">
              {formData.team}
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className="w-[330px] border-[#333] border-2 border-b-4 bg-white">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={formData.team}
              onValueChange={(value) => handleInput("team", value)}
            >
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
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
      <button className="w-full mt-6 bg-[#333] rounded-lg p-2 text-white">
        Add member
      </button>
    </SheetContent>
  );
};
