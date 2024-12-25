import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import usFlag from "../assets/usFlag.jpg";
const TopInfoBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return (
   

    <div className="bg-primary-light text-white py-1 px-4 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0">
        <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
          <Link to={"https://www.it4tsolutions.com/"} className="block">
            🌐 Powered by <span>www.it4tsolutions</span>
          </Link>
          <Link
            to={"mailto:support@it4tsolutions.com"}
            className="flex items-center gap-2"
          >
            <FaHeadset /> <span>Help Desk</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 text-center">
          <FaRegClock />
          <span className="text-xs">{formatDate(currentTime)}</span>
          <img src={usFlag} alt="US Flag" className="w-8 h-4 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
