import React, { useState } from "react";
import HealthCareTypeDropdown from "./healthCare";

const HealthCareSelect: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div>
      <HealthCareTypeDropdown onChange={handleSelect} />
      {selectedType && (
        <p className="hidden">Selected Health Care Type: {selectedType}</p>
      )}
    </div>
  );
};

export default HealthCareSelect;
