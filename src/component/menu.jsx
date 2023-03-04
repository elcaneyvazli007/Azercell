import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiManualJuicer, GiSettingsKnobs } from "react-icons/gi";

function menu() {
  const menus = [
    {
      id: 1,
      name: "Əsas",
      icon: "AiOutlineHome",
    },
    {
      id: 2,
      name: "Tariflər",
      icon: "AiOutlineStar",
    },
    {
      id: 3,
      name: "Xidmətlər",
      icon: "AiOutlineSetting",
    },
    {
      id: 4,
      name: "Tətbiqlər",
      icon: "BsPhone",
    },
    {
      id: 5,
      name: "Paylaş Qazan",
      icon: "BsCoin",
    },
    {
      id: 6,
      name: "İnternet",
      icon: "AiOutlineWifi",
    },
    {
      id: 7,
      name: "Maliyyə",
      icon: "MdOutlineBusinessCenter",
    },
    {
      id: 8,
      name: "Ayarlar",
      icon: "GiSettingsKnobs",
    },
  ];

  return (
    <div className="bg-primary2 w-[17%] mx-auto rounded-[1.5rem]">
      {menus.map((item) => (
        <div className="flex flex-row items-center rounded-[.9rem] gap-[1rem] hover:bg-white p-[2rem] hover:text-primary2" key={item.id}>
          <h1 className=" text-[1.8rem]">{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default menu;
