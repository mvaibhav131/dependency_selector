import React, { useState } from 'react';
import data from '../data/MOCK_DATA.json';
import './selector.scss';

const DependencySelector = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
      setSelectedState('');
      setSelectedCity('');
    };
  
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
      setSelectedCity('');
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
  
    return (
      <div className="container">
        <div className="selector">
          <label className="label">Country:</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="select"
          >
            <option value="">Select Country</option>
            {data.map((item, index) => (
              <option key={index} value={item.countries.name}>
                {item.countries.name}
              </option>
            ))}
          </select>
        </div>
  
        <div className="selector">
          <label className="label">State:</label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="select"
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {selectedCountry &&
              data
                .find((item) => item.countries.name === selectedCountry)
                .countries.state.name.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
          </select>
        </div>
  
        <div className="selector">
          <label className="label">City:</label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="select"
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {selectedState &&
              data
                .find((item) => item.countries.name === selectedCountry)
                .countries.state.cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
          </select>
        </div>
  
        {selectedCity && (
          <div className="selected-city">
            <p behavior="" direction="right">Selected Country: {selectedCountry}</p>
            <p behavior="" direction="right">Selected State: {selectedState}</p>
            <p behavior="" direction="right">Selected City: {selectedCity}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default DependencySelector;