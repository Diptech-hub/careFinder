import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { FaDownload } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./footer";

interface HospitalData {
  id: string;
  name: string;
  address: string;
  region: string;
  hospitalEmail: string;
  telephone: string;
}

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<HospitalData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [, setCSVData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const db = firebase.firestore();
        const query: firebase.firestore.Query<firebase.firestore.DocumentData> =
          db.collection("formResponses");

        const querySnapshot = await query.get();
        const data: HospitalData[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as HospitalData;
          data.push({
            id: doc.id,
            name: docData.name,
            address: docData.address,
            region: docData.region,
            hospitalEmail: docData.hospitalEmail,
            telephone: docData.telephone,
          });
        });
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const filteredResults = searchResults.filter(
    (result) =>
      result.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Name,Address,Region,Email,Telephone\n" +
      filteredResults
        .map(
          (result) =>
            `"${result.name}","${result.address}","${result.region}","${result.hospitalEmail}","${result.telephone}"`
        )
        .join("\n");

    setCSVData(csvContent);

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospital_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  // const shareViaEmail = () => {
  //   const subject = "Hospital Data CSV";
  //   const body = "Attached is the hospital data CSV file.";
  //   const uri = `mailto:?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}&attachment=hospital_data.csv`;

  //   window.location.href = uri;
  // };

  const shareViaEmail = () => {
    const csvContent =
      "Name,Address,Region,Email,Telephone\n" +
      filteredResults
        .map(
          (result) =>
            `"${result.name}","${result.address}","${result.region}","${result.hospitalEmail}","${result.telephone}"`
        )
        .join("\n");

    setCSVData(csvContent);

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospital_data.csv");
    document.body.appendChild(link);
    link.click();

    const blob = new Blob([csvContent], { type: "hospital_data.csv" });

    const url = URL.createObjectURL(blob);

    const subject = "Hospital Data CSV";
    const body = "Attach the downloaded CSV File.";

    const uri = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(url)}`;

    window.open(uri);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="flex flex-col mx-2 mb-4">
        <strong className="text-2xl text-teal-500 mx-6 mb-4 mt-4">
          CareFinder
        </strong>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
          placeholder="Enter name of Health Care, State, Address, ..."
          className="w-7/8 mx-6 px-4 py-2 rounded-md border border-teal-300 focus:outline-none focus:ring focus:border-teal-500"
        />
      </div>

      <div className="flex my-4 justify-end mx-12 gap-2">
        <Link to="/review">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-sm inline-flex">
            <FaPencilAlt className="bg-inherit relative top-0.5 right-1 text-lg" />
            Review
          </button>
        </Link>
        <button
          onClick={downloadCSV}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm inline-flex"
        >
          <FaDownload className="bg-inherit relative top-0.5 right-1 text-lg" />{" "}
          Export Health Care
        </button>
        <button
          onClick={shareViaEmail}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm inline-flex"
        >
          <IoIosShareAlt className="bg-inherit relative top-0.5 right-1 text-lg" />{" "}
          Share via Email
        </button>
      </div>

      {loading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mx-auto animate-spin fill-teal-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {error && <p className="text-normal text-red-600 mx-6 p-4">{error}</p>}
      {filteredResults.map((result) => (
        <div key={result.id} className="mx-2 p-4 rounded-full  px-4 py-8">
          <strong className="block text-lg font-semibold text-gray-800">
            {result.name}
          </strong>
          <p className="text-sm text-gray-600">{result.address}</p>
          <p className="text-sm text-gray-600">{result.region}</p>
          <p className="text-sm text-gray-600">{result.hospitalEmail}</p>
          <p className="text-sm text-gray-600 mb-4">{result.telephone}</p>
          <div
            className="inset-0 pointer-events-none"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
          ></div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default SearchBar;
