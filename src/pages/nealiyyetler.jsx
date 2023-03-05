import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./nealiyyetler.css";

const Nealiyyetler = () => {
  const [successinternet, setSuccessinternet] = useState(false);
  const [successtime, setSuccesstime] = useState(false);

  return (
    <div className="bg-white px-[5rem] py-[3rem] flex flex-col gap-[3rem] items-start w-full rounded-[1.5rem]">
      <h1 className="text-primary text-[2.5rem]">Nəaliyyətlər</h1>
      <div className="bg-[#eeeeee] px-[5rem] py-[1rem] w-full rounded-[1.5rem] flex flex-col gap-[2rem]">
        <div className="flex flex-row items-center justify-between rounded-[1.5rem]">
          <h1 className="text-[1.8rem] text-black">Internet Istifadesi</h1>
          <BiDownArrow
            className="text-black text-[2rem] cursor-pointer"
            onClick={() => setSuccessinternet(!successinternet)}
          />
        </div>
        {successinternet && (
          <div className="flex flex-col gap-[4rem]">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 Gb</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 Gb</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 Gb</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#eeeeee] px-[5rem] py-[1rem] w-full rounded-[1.5rem] flex flex-col gap-[2rem]">
        <div className="flex flex-row items-center justify-between rounded-[1.5rem]">
          <h1 className="text-[1.8rem] text-black">Danışıq Dəqiqələri</h1>
          <BiDownArrow
            className="text-black text-[2rem] cursor-pointer"
            onClick={() => setSuccesstime(!successtime)}
          />
        </div>
        {successtime && (
          <div className="flex flex-col gap-[4rem]">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 deq</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 deq</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[1.8rem] text-black">100 deq</h1>
              <div className="lg:w-[35rem] md:w-[25rem] w-[15rem] h-[.8rem] rounded-[1.5rem] bg-primary">
                <span className="skill-per relative h-full block w-[60%] rounded-[1.5rem] bg-[#00ff00]">
                  <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem]">
                    60%
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nealiyyetler;
