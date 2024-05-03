import React, { useEffect, useState } from "react";

const CurrWeather = ({ data }) => {
  const [timestamp, setTimestamp] = useState(0);
  const [convertedTime, setConvertedTime] = useState(null);

  useEffect(() => {
    setTimestamp(data.dt);

    const unixTimestamp = timestamp * 1000;
    const date = new Date(unixTimestamp);
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes} ${ampm}`;
    setConvertedTime(time);
  }, [data]);

  return (
    <div className="rounded-lg flex flex-col gap-6 justify-between border-[3px] border-[#ffffffff] bg-[#FFFFFF66] px-8 py-5">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[#00000099] font-int">
          Curren Weather
        </span>
        <span className="text-xs ml-4">{convertedTime}</span>
      </div>
      <div className="flex items-center gap-5">
        {data && data.weather && data.weather[0] && (
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        )}
        <span className="text-2xl font-semibold">
          {Math.round(data.main.temp)} °C
        </span>
        <span className="text-[12px] text-[#00000066] font-light font-pop">
          {data.weather[0].main}
        </span>
      </div>
      <p className="text-[15px] font-light font-pop">
        There will be {data.weather[0].description}. The high will be{" "}
        <span className="font-normal">{data.main.temp_max}</span>
      </p>
    </div>
  );
};

export default CurrWeather;
