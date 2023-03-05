import { MdOutline4GMobiledata } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./tarif.css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

const tarifler = () => {
  return (
    <div className="bg-white px-[3rem] py-[1rem] w-[70%] h-full rounded-[1.5rem] flex flex-col gap-[3rem] pb-[7rem]">
      <h1 className="text-[2.5rem] text-primary font-extrabold">Tarifler</h1>
      <div className="flex flex-row items-center justify-between">
        <p className="text-[1.8rem] font-semibold">Cari Tarif</p>
        <p className="text-[2.2rem] font-extrabold text-primary">IsteSen</p>
      </div>

      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-[3rem] py-[1rem] flex flex-col bg-primary w-[40%] h-[40rem] rounded-[1.5rem] gap-[2rem]">
          <h1 className="text-[2.5rem] text-white font-extrabold">IsteSen</h1>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">2 GB</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.4rem] text-white font-semibold">
              Ölkədaxili 350 dəq
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[1.6rem]">Yazışma 1 GB</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[1rem]">
            <MdWhatsapp className="text-[2rem] text-white" />
            <BsMessenger className="text-[1.8rem] text-white" />
          </div>
          <div className="flex flex-col items-center justify-center align-bottom gap-[1.5rem]">
            <p className="text-white text-[1.8rem]">10 AZN</p>
            <p className="text-[1.8rem] px-[3rem] py-[1rem] bg-secondary2 rounded-[3rem] text-white">
              Qosul
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default tarifler;
