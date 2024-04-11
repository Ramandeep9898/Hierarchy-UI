export const Chip = ({ chipInfo, onChange }) => {
  return (
    <div className="relative h-11 w-full ">
      <p className="text-[14px] font-normal leading-tight text-gray-500">
        {chipInfo.label}
      </p>
      <div className="flex gap-3">
        {chipInfo.options.map((ele) => (
          <button
            key={ele.name}
            className="border px-3 py-2 rounded-lg"
            onClick={() => onChange(chipInfo.name, ele.name)}
          >
            {ele.value}
          </button>
        ))}
      </div>
    </div>
  );
};
