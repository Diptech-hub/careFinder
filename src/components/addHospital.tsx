import React, { useState } from "react";
import Telephone from "../utils/phoneNumber";
import Country from "../utils/region";
import MarkdownEditor from "../utils/markdown";
import ImageUploader from "./image";
import Dropdown from "./healthCare";
import Pagination from "./pagination";
import "firebase/firestore";
import firebase from "firebase/compat/app";
import Popup from "./popup";

interface hospitalData {
  name: string;
  address: string;
  hospitalEmail: string;
  markdown: string;
  country: string;
  region: string;
  image: string;
  telephone: string;
  healthCare: string;
}

const HospitalList: React.FC = () => {
  const [formData, setFormData] = useState<hospitalData>({
    name: "",
    address: "",
    hospitalEmail: "",
    markdown: "",
    country: "",
    region: "",
    image: "",
    telephone: "",
    healthCare: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  const handleCountryChange = (country: string, region: string) => {
    setFormData({ ...formData, country, region });
  };

  const handleHealthCareChange = (healthCare: string) => {
    setFormData({ ...formData, healthCare });
  };

  const handleImageUpload = (image: string) => {
    setFormData({ ...formData, image });
  };

  const handleMarkdownChange = (markdown: string) => {
    setFormData({ ...formData, markdown });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-screen bg-teal-700 flex justify-center items-center">
        <strong className="text-white text-3xl">careFinder</strong>
      </div>
      <div className="w-full md:w-1/2 px-4 py-8">
        <div className="py-4">
          <strong className="text-2xl text-teal-500">Health Care Information</strong>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {currentPage === 1 && (
            <>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">Hospital Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-b border-teal-500 focus:border-teal-700 my-2 w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm">Hospital Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="border-b border-teal-500 focus:border-teal-700 my-2 w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="hospitalEmail" className="text-sm">Hospital Email</label>
                <input
                  type="text"
                  id="hospitalEmail"
                  name="hospitalEmail"
                  value={formData.hospitalEmail}
                  onChange={handleInputChange}
                  className="border-b border-teal-500 focus:border-teal-700 my-2 w-full focus:outline-none"
                  required
                />
              </div>
            </>
          )}
          {currentPage === 2 && (
            <>
              <Telephone onChange={handlePhoneChange} value={formData.telephone} />
              <Dropdown onChange={handleHealthCareChange} />
              <Country onChange={handleCountryChange} />
              <ImageUploader onChange={handleImageUpload} />
            </>
          )}
          {currentPage === 3 && (
            <>
              <MarkdownEditor onChange={handleMarkdownChange} />
              <button
                onClick={handleOpenPopup}
                type="submit"
                className="py-2 px-4 rounded my-4 bg-teal-500 text-white hover:bg-teal-700"
              >
                Submit
              </button>
              {showPopup && (
                <Popup
                  message="Health Care details submitted successfully"
                  onConfirm={handleClosePopup}
                  onCancel={handleClosePopup}
                />
              )}
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
