import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDown.components";

export const Dropdown = ({
  label,
  initialDropdownValue,
  onSelect,
  name,
  department,
}: {
  label: string;
  initialDropdownValue: string;
  onSelect: any;
  name: string;
  department?: string;
}) => {
  const [selectedValue, setSelectedValue] = useState(initialDropdownValue);

  useEffect(() => {
    if (initialDropdownValue === "Choose a team") {
      /// create array of all the team in this department {department}
    }
  }, []);
  return (
    <DropdownMenu>
      <div className="flex flex-col items-start w-full">
        <div className="text-gray-500 text-sm mb-1">{label}</div>
        <DropdownMenuTrigger className="border-[#333] w-full border-2 border-b-4 px-6 py-2 rounded-lg">
          {selectedValue}
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent className="w-[330px] border-[#333] border-2 border-b-4 bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedValue}
          onValueChange={(value) => {
            setSelectedValue(value);
            onSelect(name, value);
          }}
        >
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
