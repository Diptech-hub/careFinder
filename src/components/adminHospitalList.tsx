import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom"

interface HospitalData {
  id: string;
  name: string;
  address: string;
  region: string;
  hospitalEmail: string;
  telephone: string;
}

const AllHospitalData: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<HospitalData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const db = firebase.firestore();
        let query: firebase.firestore.Query<firebase.firestore.DocumentData> =
          db.collection("formResponses");

        if (searchQuery) {
          query = query
            .where("name", ">=", searchQuery)
            .where("name", "<=", searchQuery + "\uf8ff")
            .where("address", ">=", searchQuery)
            .where("address", "<=", searchQuery + "\uf8ff")
            .where("region", ">=", searchQuery)
            .where("region", "<=", searchQuery + "\uf8ff")
            .orderBy("name");
        }

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row mx-6 px-4 justify-between mb-6">
        <strong className="text-2xl text-teal-500">Admin Dashboard</strong>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
          placeholder="Enter name of Health Care, State, Address, ..."
          className="w-1/2 px-8 py-2 rounded-md border border-teal-300 focus:outline-none focus:ring focus:border-teal-500"
        />
        <Link to="/addHospital">
        <button className="mr-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-sm">
          Add Health Care
        </button>
        </Link>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-normal text-red-600 mx-6 p-4">{error}</p>}
      {filteredResults.map((result) => (
        <div key={result.id} className="mx-6 p-4 rounded-full">
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
    </div>
  );
};

export default AllHospitalData;
