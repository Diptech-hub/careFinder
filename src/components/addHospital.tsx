import { useState } from "react";
import Telephone from "../utils/phoneNumber";
import Country from "../utils/region";
import MarkdownEditor from "../utils/markdown";

interface hospitalData {
  name: string;
  address: string;
  phoneNumber: string;
  hospitalType: string;
  hospitalEmail: string;
}

const HospitalList: React.FC = () => {
  const [formData, setFormData] = useState<hospitalData>({
    name: "",
    address: "",
    phoneNumber: "",
    hospitalType: "",
    hospitalEmail: "",
  });
  // submit form function
  //   const onSubmit = (e: any) => {
  //     e.preventDefault();
  //     console.log(formData);
  //   };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Hospital Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Hospital Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Telephone />
      </div>
      <div>
        <Country />
      </div>
      <div>
        <label htmlFor="hospitalType">Hospital Type:</label>
        <input
          type="text"
          id="hospitalType"
          name="hospitalType"
          value={formData.hospitalType}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="hospitalEmail">Hospital Email</label>
        <input
          type="email"
          id="hospitalEmail"
          name="hospitalEmail"
          value={formData.hospitalEmail}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <MarkdownEditor />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalList;
