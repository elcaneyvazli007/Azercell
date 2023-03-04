import React from "react";
import "./login.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-[1.5rem] px-[3rem] py-[2rem] w-[70%] lg:w-[30%] mx-auto mt-[10rem]">
      <div className="flex flex-col items-center gap-[2rem]">
        <h1 className="text-[3rem] font-extrabold text-primary">
          Xoş Gəlmisən!
        </h1>
        <p className="text-[1.2rem] text-center">
          "Azercell" abunəçisi olaraq şəxsi kabinetdən istifadə edə bilərsiniz.
          Nömrəyə dair məlumatı əldə etmək və bir sıra əməliyyatları həyata
          keçirtmək üçün kabinetə daxil olun.
        </p>
        <div className="flex flex-col gap-[3rem]">
          <form action="">
            <div class="input-group">
              <input type='text' name="" id="text1" placeholder=" " />
              <label for="text1">Name</label>
            </div>
          </form>
          <form action="">
            <div class="input-group">
              <input type='password' name="" id="text1" placeholder=" " />
              <label for="text1">Password</label>
            </div>
          </form>
        </div>
        <p className="text-[1.8rem] px-[5rem] py-[1rem] bg-primary text-white font-semibold rounded-[3rem] ">Daxil Ol!</p>
        <Link to='/register'><p className="text-primary text-[1.4rem] font-bold">Qeydiyyat</p></Link>
      </div>
    </div>
  );
};

export default login;
