import React from "react";

const time = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-[5rem]">
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-[3rem] text-primary font-extrabold">
          Qiymeti Daxil Edin:
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-[100%] rounded-[1.5rem] outline-none text-[2rem] px-[3rem] py-[2rem]"
        ></textarea>
      </div>
      <div className="flex flex-row gap-[5rem]">
        <button className="px-[5rem] py-[.7rem] text-[1.8rem] text-primary hover:text-white border-2 border-primary hover:bg-primary rounded-[1.5rem]">Kontur</button>
        <button className="px-[5rem] py-[.7rem] text-[1.8rem] text-primary hover:text-white border-2 border-primary hover:bg-primary rounded-[1.5rem]">Internet</button>
        <button className="px-[5rem] py-[.7rem] text-[1.8rem] text-primary hover:text-white border-2 border-primary hover:bg-primary rounded-[1.5rem]">Deqiqe</button>
      </div>
    </div>
  );
};

export default time;
