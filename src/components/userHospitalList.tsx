import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

interface HospitalData {
  id: string;
  name: string;
  address: string;
  region: string;
}

const SearchBar = () => {
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
        let query: firebase.firestore.Query<firebase.firestore.DocumentData> = db.collection("formResponses");

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

  const filteredResults = searchResults.filter((result) =>
    result.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter name of Health Care, state, address, ..."
      />


{loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filteredResults.map((result) => (
        <div key={result.id}>
          <strong>Name:</strong> {result.name}, <strong>Address:</strong>{" "}
          {result.address}, <strong>Region:</strong> {result.region}
        </div>
      ))}

    </div>
  );
};

export default SearchBar;
