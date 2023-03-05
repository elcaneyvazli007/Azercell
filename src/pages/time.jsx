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
          className="w-[100%] rounded-[1.5rem] outline-none text-[2rem]"
        ></textarea>
      </div>
      <div className="flex flex-row gap-[5rem]">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default time;
