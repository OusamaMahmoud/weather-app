import React, { useContext, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";
import WeatherContext from "../context/weatherContext";

const Search = () => {
  const { search, setSearch } = useContext(WeatherContext);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        }
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
  };

  return (
    <AsyncPaginate
      className="font-pop"
      placeholder="Search Location"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
