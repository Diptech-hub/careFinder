import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
            telephone: docData.telephone
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
        .map((result) => `${result.name},${result.address},${result.region},${result.hospitalEmail},${result.telephone}`)
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospital_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const shareDataViaEmail = async () => {
    try {
      // Fetch data from Firestore
      const db = firebase.firestore();
      const querySnapshot = await db.collection("formResponses").get();
      const data = querySnapshot.docs.map((doc) => doc.data());

      // Construct shareable link with encoded data
      const encodedData = encodeURIComponent(JSON.stringify(data));
      const shareableLink = `https://example.com/share?data=${encodedData}`;

      // Open default email client with pre-filled email containing shareable link
      window.location.href = `mailto:?subject=Shared Hospital Data&body=Here is the link to view hospital data: ${shareableLink}`;
    } catch (error) {
      console.error("Error sharing data via email:", error);
    }
  };

  return (
    <div className="container px-4 py-8">
      <div className="flex flex-row mx-10 mb-6">
      <strong className="text-2xl text-teal-500">CareFinder</strong>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          e.preventDefault();
          setSearchQuery(e.target.value);
        }}
        placeholder="Enter name of Health Care, State, Address, ..."
        className="w-full mx-12 px-8 py-2 rounded-md border border-teal-300 focus:outline-none focus:ring focus:border-teal-500"
      />
      </div>

      <div className="flex my-4 justify-end mx-12">
        <button
          onClick={downloadCSV}
          className="mr-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Export Health Care
        </button>
        <button
          onClick={shareDataViaEmail}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Share via Email
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-normal text-red-600 mx-6 p-4">{error}</p>}
      {filteredResults.map((result) => (
        <div key={result.id} className="mx-6 p-4 rounded-full">
          <strong className="block text-lg font-semibold text-gray-800">{result.name}</strong> 
          <p className="text-sm text-gray-600">{result.address}</p> 
          <p className="text-sm text-gray-600">{result.region}</p>
          <p className="text-sm text-gray-600">{result.hospitalEmail}</p>
          <p className="text-sm text-gray-600 mb-4">{result.telephone}</p>
          <div className="inset-0 pointer-events-none" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}></div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
