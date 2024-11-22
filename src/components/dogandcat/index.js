import React, { useContext } from "react";
import { RefContext } from "../contexts/RefContextProvider";

const Dogandcat = () => {
  const themeID = useContext(RefContext);

  return (
    <div className="pt-5">
      <div className="flex flex-wrap justify-center items-center p-5 gap-4">
        <div
          className={
            "bg-[rgba(113,133,213,0.1)] flex flex-col justify-center items-center border-x-4 rounded-[10px] pt-2 px-5 pb-5" +
            (themeID ? " border-[rgba(113,133,213,0.2)]" : " border-[#7185D5]")
          }
        >
          <img
            src={themeID ? "/images/dog_cat_1.png" : "/images/dog_cat_2.png"}
            alt="dotandcat"
            className="w-14 h-auto"
          />
          <div
            className={"text-[15px] font-bold" + (themeID ? " text-white" : "")}
          >
            Invite all Cats and Dogs
          </div>
        </div>
        <div
          className={
            "w-full flex flex-wrap justify-center items-center py-5 gap-3 rounded-[10px] border-b-4" +
            (themeID
              ? " bg-[rgba(69,81,84,0.2)] border-[rgba(113,133,213,0.2)]"
              : "  border-[#EDED69] bg-[#007AFF] ")
          }
        >
          <div className="flex space-x-2 w-full justify-center items-center">
            <img
              src="/images/bone.png"
              alt="bone.png"
              className=" w-9 h-auto"
            />
            <div className="text-[24px] font-bold text-white">1,4113.290</div>
          </div>
          <div
            className={
              "py-3 px-10 rounded-[20px] text-[12px]" +
              (themeID
                ? " bg-[rgba(225,254,198,0.05)] text-white"
                : " bg-[#E1FEC6]")
            }
          >
            Claim in 01h 35m
          </div>
        </div>
        <div
          className={
            "text-[14px] p-4 text-center tracking-[-0.4px]" +
            (themeID ? " text-white" : " text-[rgba(0,0,0,0.69)] ")
          }
        >
          Earn points only after clicking the Earn button,for 8 hours, then
          Claim, and click Earn again to earn points.
        </div>
        <div className="w-full">
          <h1 className={"font-bold" + (themeID ? " text-white " : "")}>
            8 Cats and Dogs
          </h1>
          <div
            className={
              "flex border-b-[1px] border-black p-2 space-x-2" +
              (themeID ? " text-white border-white" : "")
            }
          >
            <div className="flex justify-center items-center bg-[#F690BA] text-[16px] font-medium rounded-[999px] p-3 w-9 h-9">
              O
            </div>
            <div className="flex justify-between text-[12px] w-full">
              <div className=" font-medium">
                <span className="font-bold">Oxhgfj</span>
                <div className="flex justify-between items-center">
                  <img
                    src={
                      themeID
                        ? "/images/dog_cat_1.png"
                        : "/images/dog_cat_2.png"
                    }
                    alt="dogandcat"
                    className="w-3 h-3"
                  />
                  <span className="font-bold">00</span>
                </div>
              </div>
              <span className="font-bold">0.0000 BP</span>
            </div>
          </div>
          <div
            className={
              "flex border-b-[1px] border-black p-2 space-x-2" +
              (themeID ? " text-white border-white" : "")
            }
          >
            <div className="flex justify-center items-center bg-[#F690BA] text-[16px] font-medium rounded-[999px] p-3 w-9 h-9">
              A
            </div>
            <div className="flex justify-between text-[12px] w-full">
              <div className=" font-medium">
                <span className="font-bold">Axhgfj</span>
                <div className="flex justify-between items-center">
                  <img
                    src={
                      themeID
                        ? "/images/dog_cat_1.png"
                        : "/images/dog_cat_2.png"
                    }
                    alt="dogandcat"
                    className="w-3 h-3"
                  />
                  <span className="font-bold">00</span>
                </div>
              </div>
              <span className="font-bold">0.0000 BP</span>
            </div>
          </div>
          <div
            className={
              "flex border-b-[1px] border-black p-2 space-x-2" +
              (themeID ? " text-white border-white" : "")
            }
          >
            <div className="flex justify-center items-center bg-[#F690BA] text-[16px] font-medium rounded-[999px] p-3 w-9 h-9">
              B
            </div>
            <div className="flex justify-between text-[12px] w-full">
              <div className="font-bold">
                <span className="font-bold">Bxhgfj</span>
                <div className="flex justify-between items-center font-bold">
                  <img
                    src={
                      themeID
                        ? "/images/dog_cat_1.png"
                        : "/images/dog_cat_2.png"
                    }
                    alt="dogandcat"
                    className="w-3 h-3"
                  />
                  <span className="font-bold">00</span>
                </div>
              </div>
              <span className="font-bold">0.0000 BP</span>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="p-4 bg-[#007AFF] flex justify-center items-center rounded-[10px] text-[17px]">
            invite up to 5 friends(3 left)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogandcat;
