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
    <div className="flex flex-row">
      <div className="w-1/2">
        <strong>careFinder</strong>
      </div>
      <div className="w-1/2">
        <div className="flex py-4">
          <strong className="text-2xl text-teal-500">
            Health Care Information
          </strong>
        </div>
        <form>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm">
              Hospital Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm">
              Hospital Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hospitalType" className="text-sm">
              Hospital Type
            </label>
            <input
              type="text"
              id="hospitalType"
              name="hospitalType"
              value={formData.hospitalType}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hospitalEmail" className="text-sm">
              Hospital Email
            </label>
            <input
              type="text"
              id="hospitalEmail"
              name="hospitalEmail" 
              value={formData.hospitalEmail}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 my-2 w-3/4 focus:outline-none"
            />
          </div>
          <div>
            <Telephone />
          </div>
          <div>
            <Country />
          </div>

          <div>
            <MarkdownEditor />
          </div> 
          <button type="submit" className="py-2 px-4 rounded my-4 bg-teal-500 text-white hover:bg-teal-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HospitalList;
