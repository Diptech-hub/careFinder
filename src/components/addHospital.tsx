import { useState } from "react";
import Telephone from "../utils/phoneNumber";
import Country from "../utils/region";
import MarkdownEditor from "../utils/markdown";
import ImageUploader from "./image";
import HealthCareSelect from "./healthCareSelect";
import Pagination from "./pagination";

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
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
    };

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen bg-teal-700">
        <strong>careFinder</strong>
      </div>
      <div className="w-1/2 px-12 py-12">
        <div className="flex py-4">
          <strong className="text-2xl text-teal-500">
            Health Care Information
          </strong>
        </div>
        <form onSubmit={handleSubmit}>
          {currentPage === 1 && (
            <>
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
                  required
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
                  required
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
                  required
                />
              </div>
            </>
          )}
          {currentPage === 2 && (
            <>
              <div>
                <Telephone />
              </div>
              <div className="flex flex-col">
                <HealthCareSelect />
              </div>
              <div>
                <Country />
              </div>
              <div>
                <ImageUploader />
              </div>
            </>
          )}
          {currentPage === 3 && (
            <>
              <div>
                <MarkdownEditor />
              </div>
              <button
                type="submit"
                className="py-2 px-4 rounded my-4 bg-teal-500 text-white hover:bg-teal-700"
              >
                Submit
              </button>
            </>
          )}
          <Pagination
            totalItems={3}
            itemsPerPage={1}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </form>
      </div>
    </div>
  );
};

export default HospitalList;
