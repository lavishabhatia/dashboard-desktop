import React from "react";
import voice from "../../../public/Images/voice.png";
import network from "../../../public/Images/network.png";
import battery from "../../../public/Images/battery.png";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  const headerData = [
    { iconType: "icon", icon: <IoIosSearch className="w-7 h-6 font-semibold" /> },
    {
      iconType: "icon",
      icon: <IoNotificationsOutline className="w-7 h-6 font-semibold" />,
    },
    { iconType: "img", icon: network },
    { iconType: "img", icon: voice },
    { iconType: "img", icon: battery },
  ];

  return (
    <div className="flex w-screen justify-end gap-6 mt-3 mx-4">
      {headerData.map((header, i) => (
        <div
          key={i}
          className={`flex items-center justify-end fill-white text-white `}
        >
          {header.iconType === "img" ? <img src={header?.icon} /> : header.icon}
        </div>
      ))}
    </div>
  );
};

export default Header;
