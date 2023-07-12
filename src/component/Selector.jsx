

import React, { useState } from 'react';
import data from '../data/MOCK_DATA.json';
import Select from 'react-select';
import './selector.scss';

const DependencySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const countryOptions = data.map((item) => ({
    value: item.countries.name,
    label: item.countries.name,
  }));

  const stateOptions =
    selectedCountry &&
    data
      .find((item) => item.countries.name === selectedCountry.value)
      ?.countries.state.name.map((state) => ({
        value: state,
        label: state,
      }));

  const cityOptions =
    selectedState &&
    data
      .find((item) => item.countries.name === selectedCountry.value)
      ?.countries.state.cities.map((city) => ({
        value: city,
        label: city,
      }));

  return (
    <div className="container">
      <div className="selector">
        <label className="label">Country:</label>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countryOptions}
          isClearable
        />
      </div>

      <div className="selector">
        <label className="label">State:</label>
        <Select
          value={selectedState}
          onChange={handleStateChange}
          options={stateOptions}
          isClearable
          isDisabled={!selectedCountry}
        />
      </div>

      <div className="selector">
        <label className="label">City:</label>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          options={cityOptions}
          isClearable
          isDisabled={!selectedState}
        />
      </div>

      {selectedCity && (
        <div className="selected-city">
          Selected City: {selectedCity.label} ({selectedState.label}, {selectedCountry.label})
        </div>
      )}
    </div>
  );
};

export default DependencySelector;
