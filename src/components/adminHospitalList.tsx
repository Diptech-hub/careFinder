import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

interface HospitalData {
  id: string;
  name: string;
  address: string;
  hospitalEmail: string;
  markdown: string;
  country: string;
  region: string;
  image: string;
  telephone: string;
  healthCare: string;
  // Add other fields as needed
}

const AllHospitalData: React.FC = () => {
  const [hospitalData, setHospitalData] = useState<HospitalData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = firebase.firestore();
        const snapshot = await db.collection("formResponses").get();
        const data: HospitalData[] = [];
        snapshot.forEach((doc) => {
          const docData = doc.data() as HospitalData;
          data.push({  ...docData });
        });
        setHospitalData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Hospital Data</h1>
      <ul>
        {hospitalData.map((hospital) => (
          <li key={hospital.id}>
            <strong>{hospital.name}</strong> - {hospital.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllHospitalData;
