import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import {BiBell} from "react-icons/bi";

const navbar = () => {
  return (
    <div className="w-[100%] h-[7rem] bg-white border-b-[.1rem] border-b-black">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between pt-[1rem]">
          <img
            src="img/logo.png"
            draggable="false"
            className="h-[5rem]"
            alt=""
          />
          <div className="flex flex-row items-center justify-between gap-[3rem]">
            <div className="flex flex-row items-center gap-[1rem]">
              <FiPhoneCall className="text-[2.5rem] text-primary" />
              <p className="text-[1.6rem] text-primary font-bold">
                +994513910242
              </p>
            </div>
            <BiBell className="text-[2.5rem] text-primary" />
            <p className="text-[1.6rem] text-primary font-bold">Çıxış</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
