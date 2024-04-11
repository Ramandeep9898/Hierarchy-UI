import { Input } from "../components/Input/Input";
import { useState } from "react";
import { ADD_MEMBER_FIELDS_CONFIG } from "../config";
import { Field, FormData } from "../types/Fields.type";
import { Chip } from "../components/Chip/Chip";
import { Toaster } from "../components/Toast/toaster";
import { useToast } from "../components/Toast/use-toast";

export const Home = () => {
  const { toast } = useToast();
  const initialValue: FormData = {
    nameId: "",
    phoneNumber: "",
    emailId: "",
    department: "",
    position: "",
  };
  const [formData, setFormData] = useState<FormData>(initialValue);

  const handleInput = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  };

  const addMember = () => {
    console.log("ji");
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };

  const DynamicComponentReturn: React.FC<{ field: Field }> = ({ field }) => {
    const componentOption: { [key: string]: JSX.Element } = {
      chip: <Chip chipInfo={field} onChange={handleInput} />,
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
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-7 p-4 border-2 rounded-lg">
        {ADD_MEMBER_FIELDS_CONFIG.map((field) => (
          <div className="" key={field.name}>
            <DynamicComponentReturn field={field} />
          </div>
        ))}

        <button onClick={addMember}>Add Member +</button>
      </div>
      <Toaster />
    </main>
  );
};
