import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import Modal from "../component/modal.jsx";

const esas = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white w-full py-[2.5rem] px-[4rem] rounded-[1.5rem]">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[1.8rem] text-primary font-bold">Əsas</h1>
          <p className="px-[3rem] py-[.5rem] text-[1.2rem] rounded-[1.5rem] border-2 border-primary">
            Fakturasız Xətt
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-[2rem] text-primary font-bold">Balans</h1>
            <p className="text-[3.2rem] font-extrabold text-primary">
              2.33 AZN
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-[10rem]">
            <div className="flex flex-col items-start">
              <p className="text-[1.4rem] text-gray-500">Nömrənin xətti</p>
              <div
                className="flex flex-row items-center gap-[.1rem] cursor-pointer"
                onClick={() => setModal(!modal)}
              >
                <p className="text-[2rem] font-bold text-primary">Açıqdır</p>
                <IoMdArrowDropdown className="text-[2rem]" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[1.4rem] text-gray-500">Cari Tarif</p>
              <Link
                className="flex flex-row items-center gap-[.1rem]"
                to="/tarifler"
              >
                <p className="text-[2rem] font-bold text-primary">IsteSen</p>
                <IoMdArrowDropright className="text-[2rem]" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem] pt-[1rem]">
            <div className="flex flex-col items-start gap-[1rem]">
              <p className="text-[1.4rem] text-gray-500">BIRTƏRƏFLI BAĞLANMA</p>
              <div className="h-[.8rem] w-[30rem] rounded-[1.5rem] bg-grey">
                <span className="relative h-full block w-[60%] rounded-[1.5rem] bg-secondary"></span>
              </div>
              <div className="flex flex-row items-center gap-[10rem]">
                <p className="text-[1.4rem] text-gray-500">28/05/2023</p>
                <p className="text-[1.4rem] text-gray-500">84 gün qaldı</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[1rem]">
              <p className="text-[1.4rem] text-gray-500">LƏĞV OLUNMA TARIXI</p>
              <div className="h-[.8rem] w-[30rem] rounded-[1.5rem] bg-grey">
                <span className="relative h-full block w-[60%] rounded-[1.5rem] bg-secondary"></span>
              </div>
              <div className="flex flex-row items-center gap-[10rem]">
                <p className="text-[1.4rem] text-gray-500">28/05/2023</p>
                <p className="text-[1.4rem] text-gray-500">84 gün qaldı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default esas;
