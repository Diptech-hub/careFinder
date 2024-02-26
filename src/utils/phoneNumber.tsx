import PhoneInput from "react-phone-number-input";
import  "../styles/phoneNumber.css"
import { useState } from "react";

function Telephone() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div>
      <label htmlFor="phone">Telephone Number:</label>
      <PhoneInput 
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handlePhoneChange}
      />
    </div>
  );
}

export default Telephone;
