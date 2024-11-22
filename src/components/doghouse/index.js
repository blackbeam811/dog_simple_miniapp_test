import React from "react";
import { useContext } from "react";
import { RefContext } from "../contexts/RefContextProvider";

const Doghouse = () => {
  const { themeID, setThemeID } = useContext(RefContext);
  const txtColor = themeID ? " text-white " : " text-black ";
  return (
    <div className="px-5 py-7 w-full flex flex-col gap-16">
      <div className="flex flex-col justify-center items-center">
        <div
          className={
            " text-[55px] text-white rounded-full p-5 font-bold" +
            (themeID
              ? " bg-transparent border-2 border-[#007AFF]"
              : " bg-[#007AFF]")
          }
        >
          WT
        </div>
        <div className={"text-[24px] font-bold mt-2" + txtColor}>TOMEK</div>
        <div className="flex items-center mt-4">
          <img src="/images/bone.png" alt="bone.png" className=" w-14 h-12" />
          <div className={"text-[40px] font-semibold" + txtColor}>
            1,4113,290
          </div>
        </div>
      </div>
      <div
        className={
          "w-full flex flex-col justify-center items-center p-5 rounded-2xl border-b-4 hover:cursor-pointer active:border-none" +
          (themeID
            ? " bg-[rgba(69,81,84,0.2)] border-[rgba(113,133,213,0.2)]"
            : "  border-[#EDED69] bg-[#007AFF] ")
        }
      >
        <img src="/images/cat.png" alt="cat.png" />
        <div className="text-[24px] text-white font-medium">Games</div>
        <div className="text-[14px] text-white font-light">Coming soon</div>
      </div>
      <div
        className={
          "flex justify-between items-center text-[18px] rounded-[5px] text-white" +
          (themeID ? " bg-[#2B78CD] " : " bg-[#007AFF] ")
        }
      >
        <div className="flex justify-end items-center flex-1 w-0 pr-[17px]">
          <span className="text-[18px] tracking-[-0.4px]">Farming</span>
          <img
            src="/images/bone.png"
            alt="bone.png"
            className=" w-[23px] ml-[18px]"
          />
          <div className="text-white ml-[7px]">55.91</div>
          <div className="ml-[7px]">
            <div className="text-[rgba(0,0,0,0.69)]">1</div>
            <div>2</div>
          </div>
        </div>
        {/* bg-[rgba(43, 120, 205, 0.5)] */}
        <div
          className={
            " text-[rgba(43,120,205,0.5)] px-[13.5px] py-[19px] rounded-r-[5px] font-medium" +
            (themeID ? " bg-[#455154] text-white" : " bg-[#E1FEC6]")
          }
        >
          01h 46m
        </div>
      </div>
    </div>
  );
};

export default Doghouse;
