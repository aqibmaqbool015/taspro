import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const AddressUpdateDropdown = () => {
  const initialCities = [
    " Raipur |",
    "New Raipur |",
    "Durg |",
    "Bhilai |",
    "Korba |",
    "Raigarh |",
    "Kanker",
  ];
  const initialCitiesDrop = [
    " Raipur",
    "New Raipur",
    "Durg",
    "Bhilai",
    "Korba",
    "Raigarh",
    "Kanker",
  ];

  const [selectedCities, setSelectedCities] = useState(initialCities);

  const handleCityChange = (index, newCity) => {
    const updatedCities = [...selectedCities];
    updatedCities[index] = newCity;
    setSelectedCities(updatedCities);
  };

  return (
    <>
      <span className="city-updated-link-arround">Serving Cities:</span>
      {selectedCities.map((city, index) => (
        <Dropdown key={index} className="d-inline-block mr-2">
          <Dropdown.Toggle
            variant="primary"
            id={`city-dropdown-${index}`}
            className="dropdown-toggle-location-address-update"
          >
            {city}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {initialCitiesDrop.map((option, optionIndex) => (
              <Dropdown.Item
                key={optionIndex}
                onClick={() => handleCityChange(index, option)}
              >
                <h5 className="user-provider-dummy">{option}</h5>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </>
  );
};

export default AddressUpdateDropdown;
