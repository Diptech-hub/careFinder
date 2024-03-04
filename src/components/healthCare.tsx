import React, { useState } from "react";

interface HealthCareTypeDropdownProps {
  onChange: (value: string) => void;
}

const HealthCareTypeDropdown: React.FC<HealthCareTypeDropdownProps> = ({
  onChange,
}) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    onChange(value); 
  };

  return (
    <div className="flex flex-col space-y-4">
      <select
        id="healthCareType"
        value={selectedType}
        onChange={handleSelect}
        className="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
        required
      >
        <option value="">Select Health Care Type</option>
        <option value="hospital">Hospital</option>
        <option value="optician">Optician</option>
        <option value="dentist">Dentist</option>
        <option value="maternity">Maternity Home</option>
        <option value="others">Others</option>
      </select>
    </div>
  );
};

export default HealthCareTypeDropdown;
