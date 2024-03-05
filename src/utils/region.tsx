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
}

const Example: React.FC<ExampleProps> = ({ initialValue, onChange }) => {
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
      onChange(val, ""); // Reset region value when country changes
    }
  };

  const selectRegion = (val: string) => {
    setRegion(val);
    if (onChange) {
      onChange(country, val); // Pass selected country and region values to onChange prop
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <CountryDropdown
        value={country}
        onChange={(val) => selectCountry(val)}
        className="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
        required
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
        className="text-sm border border-teal-500 focus:border-teal-700 my-4 py-2 w-3/4 focus:outline-none rounded"
        required
      />
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

export default Example;
