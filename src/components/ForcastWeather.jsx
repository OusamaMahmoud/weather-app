import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const ForcastWeather = ({ data }) => {
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

  const moveNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % 7);
  };

  const movePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
  };

  return (
    <div className="flex justify-between items-center gap-2 ">
      <button onClick={movePrevious}><IoMdArrowDropleft className="text-2xl" /></button>
      {data &&
        data.list &&
        data.list.slice(startIndex, startIndex + 4).map((item, idx) => {
          const dayInAWeekIdx = (new Date().getDay() + idx + startIndex) % 7;
          const dayInAWeek = WEEK_DAYS[dayInAWeekIdx];

          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + idx + startIndex);
          const month = currentDate.toLocaleString("default", {
            month: "short",
          });
          const dayOfMonth = currentDate.getDate();
          const formattedDate = `${month} ${dayOfMonth}`;

          return (
            <div key={idx} >
              <div className="flex flex-col justify-center items-center ">
                <span className="whitespace-nowrap text-[12px] font-int font-medium">
                 {dayInAWeek}
                </span>
                <span className="text-[12px] text-[#0000007A] font-pop font-normal ">
                  {formattedDate}
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="Weather Icon"
                />

                <span className="text-[12px] font-int font-medium">
                  {item.weather[0].main}
                </span>
              </div>
              <div className="flex flex-col  mt-3  justify-center items-center">
                <span className="whitespace-nowrap text-[12px] text-[#0000007A] font-pop font-normal ">
                  {Math.floor(item.main.temp_min)}-{Math.ceil(item.main.temp_max)}℃
                </span>
                <span className=" text-[12px] text-[#0000007A] font-pop font-normal ">
                  AQI {item.main.humidity}
                </span>
              </div>
            </div>
          );
        })}
      <button onClick={moveNext}><IoMdArrowDropright className="text-2xl" /></button>
    </div>
  );
};

export default ForcastWeather;
