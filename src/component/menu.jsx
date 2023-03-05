import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiManualJuicer, GiSettingsKnobs } from "react-icons/gi";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

function menu() {
  const menus = [
    {
      id: 1,
      name: "Əsas",
      icon: "AiOutlineHome",
      link: "/",
    },
    {
      id: 2,
      name: "Tariflər",
      icon: "AiOutlineStar",
      link: "/tarifler",
    },
    {
      id: 3,
      name: "Nəaliyyətlər",
      icon: "AiOutlineSetting",
      link: "/nealiyyetler",
    },
    {
      id: 4,
      name: "Xidmətlər",
      icon: "AiOutlineSetting",
      link: "/xidmetler",
    },
    {
      id: 5,
      name: "Tətbiqlər",
      icon: "BsPhone",
      link: "/tetbiqler",
    },
    {
      id: 6,
      name: "Paylaş Qazan",
      icon: "BsCoin",
      link: "/paylas",
    },
    {
      id: 7,
      name: "İnternet",
      icon: "AiOutlineWifi",
      link: "/internet",
    },
    {
      id: 8,
      name: "Maliyyə",
      icon: "MdOutlineBusinessCenter",
      link: "/internet",
    },
    {
      id: 9,
      name: "Ayarlar",
      icon: "GiSettingsKnobs",
      link: "/ayarlar",
    },
  ];

  return (
    <div className="bg-primary2 w-[40%] mx-auto rounded-[1.5rem]">
      {menus.map((item) => (
        <Link
          to={item.link}
          className="flex flex-row items-center rounded-[.9rem] gap-[1rem] text-white hover:bg-white p-[2rem] hover:text-primary2"
          key={item.id}
        >
          <h1 className=" text-[1.8rem]">{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default menu;
