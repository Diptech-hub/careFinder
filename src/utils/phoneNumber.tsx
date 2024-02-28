import PhoneInput from "react-phone-number-input";
import  "../styles/phoneNumber.css"
import { useState } from "react";

function Telephone() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phone"  className="text-sm">Telephone Number:</label>
      <PhoneInput 
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
      />
    </div>
  );
}

export default Telephone;
