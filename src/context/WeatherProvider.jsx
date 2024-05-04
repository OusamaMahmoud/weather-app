import React, { useState } from "react";
import WeatherContext from "./weatherContext";

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [convertedTime, setConvertedTime] = useState(null);

  return (
    <WeatherContext.Provider
      value={{ search, setSearch, convertedTime, setConvertedTime }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
