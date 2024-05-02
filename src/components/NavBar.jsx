import React from "react";
import Search from "./Search";

const NavBar = () => {
  const handleOnSearchChange = (searchData) => {
    console.log("app", searchData);
  };
  return (
    <div className="flex justify-between items-center border-[3px] border-[#FFFFFF] bg-[#FFFFFF66] rounded-lg px-6 py-[18px]">
      <div className="flex items-center gap-4">
        <img
          src={"src/assets/icons/burger.svg"}
          alt="burger-icon"
          className=""
        />
        <p className="text-[#0FB3BB] text-lg font-semibold ">Sky Cast</p>
        <div className="flex items-center gap-3 ml-10">
          <img
            src={"src/assets/icons/location.svg"}
            alt="burger-icon"
            className=""
          />
          <p>Egypt, Cairo</p>
        </div>
      </div>
      <div className="flex items-center gap-14">
        <div className=" flex items-center gap-2 bg-transparent shadow-lg">
          <img
            src={"src/assets/icons/search.svg"}
            alt="burger-icon"
            className=""
          />
          <Search onSearchChange={handleOnSearchChange}  />
        </div>
        <button className="rounded-lg px-14 py-4 bg-[#0FB3BBCC] text-lg text-black font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
