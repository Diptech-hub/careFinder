import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

interface ExampleProps {
  initialValue?: {
    country: string;
    region: string;
  };
  onChange?: (country: string, region: string) => void;
  className?: string; // Add className prop
}

const Country: React.FC<ExampleProps> = ({
  initialValue,
  onChange,
  className,
}) => {
  const [country, setCountry] = useState<string>(initialValue?.country || "");
  const [region, setRegion] = useState<string>(initialValue?.region || "");
  const [states, setStates] = useState<string[]>([]);

  const selectCountry = (val: string) => {
    setCountry(val);
    const selectedCountryData =
      CountryRegionData[val as keyof typeof CountryRegionData];
    if (selectedCountryData) {
      const selectedCountryRegions =
        selectedCountryData[region as keyof typeof selectedCountryData];
      setStates(selectedCountryRegions || []);
      setRegion("");
    } else {
      setStates([]);
      setRegion("");
    }
    if (onChange) {
      onChange(val, "");
    }
  };

  const selectRegion = (val: string) => {
    setRegion(val);
    if (onChange) {
      onChange(country, val);
    }
  };

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      <div className="relative">
        <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)}
          classes="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
        />
        <span className="absolute right-3 top-2 text-gray-400 pointer-events-none">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.293 12.707a1 1 0 0 1-1.414-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="relative">
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)}
          classes="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
        />
        <span className="absolute right-3 top-2 text-gray-400 pointer-events-none">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.293 12.707a1 1 0 0 1-1.414-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {country && states.length > 0 && (
        <select
          value={region}
          onChange={(e) => selectRegion(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Country;
