import { Link } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const NavBar = ({ data }) => {
  const { userData } = useContext(WeatherContext);

  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center border-[3px] border-[#FFFFFF] bg-[#FFFFFF66] rounded-lg px-6 py-[18px]">
      <div className="flex items-center gap-4">
        <img
          src={"/assets/icons/burger.svg"}
          alt="burger-icon"
          className=""
        />
        <p className="text-[#0FB3BB] text-lg font-semibold font-int ">
          Sky Cast
        </p>
        <div className="flex items-center gap-3 ml-10">
          <img
            src={"/assets/icons/location.svg"}
            alt="burger-icon"
            className=""
          />
          {data && <p className="font-pop">{data.city || "Cairo , EG"}</p>}
        </div>
      </div>
      <div className="flex items-center gap-14">
        <div className=" flex items-center gap-2 bg-transparent shadow-lg">
          <img
            src={"/assets/icons/search.svg"}
            alt="burger-icon"
            className=""
          />
          <Search />
        </div>
        {userData ? (
          <div className="flex items-center gap-3">
            <img src="/assets/icons/notification.svg" />
            <img src="/assets/icons/profile.svg" />
            <p className="font-semibold font-int text-[17px] tracking-wider">{userData.fullName}</p>
          </div>
        ) : (
          <Link to={"/signup"}>
            <button className="text-[14px] whitespace-nowrap rounded-lg px-6 py-2 lg:px-14 lg:py-4 bg-[#0FB3BBCC] lg:text-lg text-black font-semibold font-int">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
