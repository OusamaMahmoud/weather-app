import React from "react";
import CurrWeather from "./CurrWeather";
import NavBar from "./NavBar";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/weatherContext";
import ForcastWeather from "./ForcastWeather";
import AirCondition from "./AirCondition";
import Footer from "./Footer";

const Home = () => {
  const { search, setSearch } = useContext(WeatherContext);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);

  useEffect(() => {
    if (search === null) {
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${30.033333}&lon=${31.233334}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const forcasttWeatherFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${30.033333}&lon=${31.233334}&appid=${WEATHER_API_KEY}&units=metric`
      );

      Promise.all([currentWeatherFetch, forcasttWeatherFetch])
        .then(async (response) => {
          const currentWeatherResponse = await response[0].json();
          const forcastWeatherResponse = await response[1].json();

          setCurrentWeather({ ...currentWeatherResponse });
          setForcastWeather({ ...forcastWeatherResponse });
        })
        .catch((err) => console.log(err));
    } else {
      const [lat, lon] = search.value.split(" ");

      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const forcasttWeatherFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      Promise.all([currentWeatherFetch, forcasttWeatherFetch])
        .then(async (response) => {
          const currentWeatherResponse = await response[0].json();
          const forcastWeatherResponse = await response[1].json();

          setCurrentWeather({ city: search.label, ...currentWeatherResponse });
          setForcastWeather({ city: search.label, ...forcastWeatherResponse });
        })
        .catch((err) => console.log(err));

      console.log("curr =>", currentWeather);

      console.log("forcast =>", forcastWeather);
    }
  }, [search]);

  
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-[#CBE0EA] via-[#C2D7E0] to-[#DAE0E2]">
      <NavBar data={currentWeather} />
      <div className="flex flex-col md:flex-row  justify-between  items-start mt-8">
        <div className="flex flex-wrap justify-start items-start gap-6 "> 
          {currentWeather && <CurrWeather data={currentWeather} />}
          {forcastWeather && (
            <div className="lg:min-w-[500px] xl:min-w-[375px]  rounded-2xl px-5 py-4 border-[3px] bg-[#FFFFFF66] border-[white] ">
              {currentWeather && (
                <span className="text-[15px] font-int font-medium">
                  {currentWeather.city || "Cairo , EG"}
                </span>
              )}
              <div className="divider divider-vertical m-0 mt-[4px] mb-2 "></div>
              <ForcastWeather data={forcastWeather} />
            </div>
          )}
          {forcastWeather && (
            <div className="mb-10  lg:mb-0 xl:w-[800px]">
              <img src="/assets/icons/forcastHourly.svg" />
            </div>
          )}
        </div>
        {forcastWeather && <AirCondition data={forcastWeather} />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
