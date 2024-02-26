import { useState } from "react";
import Telephone from "../utils/phoneNumber"

interface hospitalData {
  name: string;
  address: string;
  phoneNumber: string;
  hospitalType: string;
  image: string;
}

const HospitalList: React.FC = () => {
  const [formData, setFormData] = useState<hospitalData>({
    name: "",
    address: "",
    phoneNumber: "",
    hospitalType: "",
    image: ""
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {/* <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        /> */}
        <Telephone />
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
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalList;


