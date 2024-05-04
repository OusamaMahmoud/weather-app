import React, { useContext, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import WeatherContext from "../context/weatherContext";

const AirCondition = ({ data }) => {
  const { convertedTime } = useContext(WeatherContext);
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [target, setTarget] = useState(2);

  const moveNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % 7);
    setTarget((prevIndex) => prevIndex + 1);
  };

  const movePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
    setTarget((prevIndex) => prevIndex - 1);

  };

  // Calculate the index of the current day
  const todayIndex = new Date().getDay();

  return (
    <div className="rounded-2xl bg-[#FFFFFF66] p-3 pt-10 md:-mt-32 lg:-mt-24 border-[3px] border-white xl:mt-0 md:max-w-[360px] md:ml-5 lg:ml-0  lg:max-w-[500px]">
      <div className="flex justify-between items-center gap-5">
        <button onClick={movePrevious}>
          <MdKeyboardArrowLeft size={35} color="#0FB3BB" />
        </button>
        {data &&
          data.list &&
          // Use todayIndex to ensure the current day is displayed in the middle
          data.list
            .slice(startIndex + todayIndex, startIndex + todayIndex + 5)
            .map((item, idx) => {
              const dayInAWeekIdx =
                (new Date().getDay() + idx + startIndex) % 7;
              const dayInAWeek = WEEK_DAYS[dayInAWeekIdx];
              const currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + idx + startIndex);
              const month = currentDate.toLocaleString("default", {
                month: "short",
              });
              const dayOfMonth = currentDate.getDate();
              const formattedDate = `${month} ${dayOfMonth}`;
              // Determine if it's today
              const isToday = idx === 2; // The middle day
              return (
                <div key={idx}>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-[12px] font-int font-medium ${
                        isToday ? "text-[18px]" : "text-[15px]"
                      }`}
                    >
                      {dayInAWeek.slice(0, 3).toUpperCase()}
                    </span>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className={isToday ? "w-10" : "w-8"}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        <button onClick={moveNext}>
          <MdKeyboardArrowRight size={35} color="#0FB3BB" />
        </button>
      </div>
      <div className="flex justify-center items-center text-[17px] font-int font-medium gap-4">
        <img src="src/assets/icons/clock.svg" /> {convertedTime}
      </div>
      {data && data.list && (
        <div className="flex flex-col justify-start items-start p-3">
          <h1 className="text-sm font-int font-bold tracking-wide mt-3">
            AIR CONDITIONS
          </h1>
          <div className="flex items-start  gap-3 mt-5 mb-6">
            <span>
              <img src="src/assets/icons/realFeel.svg" />
            </span>
            <div className="">
              <p className="font-int text-[12px] font-medium">Real Feel</p>
              <p className="text-[16px] font-int font-bold ">
                {data.list[target].main.feels_like} °C
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3 mt-5  mb-6">
            <span>
              <img src="src/assets/icons/wind.svg" />
            </span>
            <div className="font-int text-[12px] font-medium">
              <p className="font-int text-[12px] font-medium">Wind</p>
              <p className="text-[16px] font-int font-bold ">
                {data.list[target].wind.speed} km/hr
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3 mt-5  mb-6">
            <span>
              <img src="src/assets/icons/rain.svg" />
            </span>
            <div className="font-int text-[12px] font-medium">
              <p className="font-int text-[12px] font-medium">
                {" "}
                Chance Of Rain
              </p>
              <p className="text-[16px] font-int font-bold ">
                {data.list[target].pop} %
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3 mt-5  mb-6">
            <span>
              <img src="src/assets/icons/UV.svg" />
            </span>
            <div className="font-int text-[12px] font-medium">
              <p className="font-int text-[12px] font-medium">UV Index </p>
              <p className="text-[16px] font-int font-bold ">
                {Math.round(data.list[target].wind.gust)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirCondition;
