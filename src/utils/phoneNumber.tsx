import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles/phoneNumber.css";
import React from "react";

interface TelephoneProps {
  value: string;
  onChange: (value: string) => void;
}

const Telephone: React.FC<TelephoneProps> = ({ value, onChange }) => {
  const handleInputChange = (phoneNumber: string) => {
    onChange(phoneNumber); 
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm">
        Telephone Number:
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={handleInputChange}
        className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
        required
      />
    </div>
  );
};

export default Telephone;
