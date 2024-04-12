import { department, teams } from "../../EmployeData/employeeData";

export const Card = ({ info }) => {
  return (
    <div className="border-[#333] border-2  border-b-4 rounded-xl px-6 py-3">
      <h1 className="font-bold text-3xl text-[#333]">{info.name}</h1>
      <h2 className="text-gray-600">
        {info.email}· {info.phoneNumber}
      </h2>
      <div className="flex gap-2">
        <Badge
          variant={"department"}
          title={department[info.deptId]?.deptName}
        />
        <Badge variant={"designation"} title={info.designation} />
        <Badge variant={"team"} title={teams[info.teamId]?.teamName} />
      </div>
      <div className="flex gap-2">
        <button className="">Remove</button>
        <button className="">change team</button>
        <button className="">view team</button>
      </div>
    </div>
  );
};

const Badge = ({
  variant,
  title,
}: {
  variant: "department" | "designation" | "team";
  title: string;
}) => {
  let badgeComponent;
  switch (variant) {
    case "department":
      badgeComponent = <DepartmentBadge title={title} />;
      break;
    case "designation":
      badgeComponent = <DesignationBadge title={title} />;
      break;
    case "team":
      badgeComponent = <TeamBadge title={title} />;
      break;
    default:
      null;
  }

  return badgeComponent;
};

const DepartmentBadge = ({ title }) => {
  return <span className="jj">{title}</span>;
};

const DesignationBadge = ({ title }) => {
  return <span className="">{title}</span>;
};

const TeamBadge = ({ title }) => {
  return <span className="default-badge">{title}</span>;
};

export default Badge;
