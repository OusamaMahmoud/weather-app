import CurrWeather from "./components/CurrWeather";
import NavBar from "./components/NavBar";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useContext, useEffect, useState } from "react";
import WeatherContext from "./context/weatherContext";
import ForcastWeather from "./components/ForcastWeather";
function App() {
  const { search, setSearch } = useContext(WeatherContext);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);

  useEffect(() => {
    if (search !== null) {
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
      <NavBar />
      <div className="flex justify-around items-center mt-8">
        {currentWeather && <CurrWeather data={currentWeather} />}
        <div className="px-5 py-4 border-[3px] border-[white] rounded-lg">
          {currentWeather && <span className="text-[15px] font-int font-medium">{currentWeather.city}</span>}
          <div className="divider divider-vertical mt-[6px]"></div>
            <ForcastWeather data={forcastWeather}/>
        </div>
        <div className="w-[350px]"></div>
      </div>
    </div>
  );
}

export default App;
