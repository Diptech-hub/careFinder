import React from "react";

interface DropdownProps {
  onChange: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const options = [
    "Hospital",
    "Optician",
    "Dentist",
    "Dermatologist",
    "Maternity Home",
    "Others",
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <select
        onChange={handleSelectChange}
        className="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
