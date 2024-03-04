import React, { useState } from "react";
import Telephone from "../utils/phoneNumber";
import Country from "../utils/region";
import MarkdownEditor from "../utils/markdown";
import ImageUploader from "./image";
import HealthCareSelect from "./healthCareSelect";
import Pagination from "./pagination";
// import firebase from "firebase/compat/app";
import "firebase/firestore";
import firebase from "firebase/compat/app";

interface hospitalData {
  name: string;
  address: string;
  hospitalType: string;
  hospitalEmail: string;
  markdown: string;
  country: string;
  image: string;
  telephone: string;
}

const HospitalList: React.FC = () => {
  const [formData, setFormData] = useState<hospitalData>({
    name: "",
    address: "",
    hospitalType: "",
    hospitalEmail: "",
    markdown: "",
    country: "",
    image: "",
    telephone: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if all required fields are filled, including markdown
    if (
      formData.name &&
      formData.address &&
      formData.hospitalEmail &&
      formData.telephone &&
      formData.markdown
    ) {
      await storeFormData(formData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const db = firebase.firestore();

  const storeFormData = async (formData: hospitalData) => {
    try {
      await db.collection("formResponses").add(formData);
      console.log("Form data stored successfully!");
    } catch (error) {
      console.error("Error storing form data:", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePhoneChange = (telephone: string) => {
    setFormData({ ...formData, telephone });
  };

  const handleCountryChange = (country: string) => {
    setFormData({ ...formData, country });
  };

  const handleImageUpload = (image: string) => {
    setFormData({ ...formData, image });
  };

  const handleMarkdownChange = (markdown: string) => {
    setFormData({ ...formData, markdown });
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
                <Telephone onChange={handlePhoneChange} value={"value"} />
              </div>
              <div className="flex flex-col">
                <HealthCareSelect />
              </div>
              <div>
                <Country onChange={handleCountryChange} />
              </div>
              <div>
                <ImageUploader
                  onChange={function (): void {
                    {
                      handleImageUpload;
                    }
                  }}
                />
              </div>
            </>
          )}
          {currentPage === 3 && (
            <>
              <div>
                <MarkdownEditor onChange={handleMarkdownChange} />
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
