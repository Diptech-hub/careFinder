import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Example: React.FC = () => {
  const [country, setCountry] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [states, setStates] = useState<string[]>([]);

  const selectCountry = (val: string) => {
    setCountry(val);
    const selectedCountryData = CountryRegionData[val as keyof typeof CountryRegionData];
    if (selectedCountryData) {
      const selectedCountryRegions = selectedCountryData[region as keyof typeof  selectedCountryData];
      setStates(selectedCountryRegions || []);
      setRegion('');
    } else {
      setStates([]);
      setRegion('');
    }
  };

  const selectRegion = (val: string) => {
    setRegion(val);
  };

  return (
    <div>
      <CountryDropdown
        value={country}
        onChange={(val) => selectCountry(val)}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
      {country && states.length > 0 && (
        <select value={region} onChange={(e) => selectRegion(e.target.value)}>
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
