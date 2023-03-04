import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {AiOutlineSetting} from "react-icons/ai";

function menu() {
  const menu = [
    {
      id: 1,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 2,
      name: "Tariflər",
      icon: 'AiOutlineStar',
    },
    {
      id: 3,
      name: "Xidmətlər",
      icon: 'AiOutlineSetting',
    },
    {
      id: 4,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 5,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 6,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 7,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 8,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
    {
      id: 9,
      name: "Əsas",
      icon: 'AiOutlineHome',
    },
  ];

  return (
    <div className="bg-primary2 w-[17%] mx-auto rounded-[1.5rem]">
      <div className="flex flex-row items-center rounded-[1.5rem] gap-[1rem] hover:bg-white p-[2rem] hover:text-primary2">
        <AiOutlineHome className="text-[2rem] text-white " />
        <h1 className=" text-[1.8rem]">Əsas</h1>
      </div>
    </div>
  );
}

export default menu;
