import React, { useState } from "react";
import WeatherContext from "./weatherContext";

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  return (
    <WeatherContext.Provider value={{ search, setSearch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
