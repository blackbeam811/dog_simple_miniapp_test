import React, { useContext } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaRegPaste } from "react-icons/fa6";

import { CiCircleCheck } from "react-icons/ci";
import { RefContext } from "../contexts/RefContextProvider";
const QuestElement = ({ icon, title, tmp, themeID }) => {
  return (
    <div className="flex items-center justify-between space-x-2 p-1">
      {icon === 0 && (
        <FaTelegramPlane
          className={"w-12 h-auto " + (themeID ? "text-white" : "")}
        />
      )}
      {icon === 1 && (
        <FaInstagram
          className={"w-12 h-auto " + (themeID ? "text-white" : "")}
        />
      )}
      {icon === 2 && (
        <FaXTwitter
          className={"w-12 h-auto " + (themeID ? "text-white" : "")}
        />
      )}
      {icon === 3 && (
        <FaYoutube className={"w-12 h-auto " + (themeID ? "text-white" : "")} />
      )}
      <div
        className={
          "flex justify-between items-center border-b-[1px] border-black p-2 " +
          (themeID ? "border-white" : "border-black")
        }
      >
        <div>
          <div className={"text-[14px] " + (themeID ? "text-white" : "")}>
            {title}
          </div>
          <div className={"text-[10px] " + (themeID ? "text-white" : "")}>
            {tmp}
          </div>
        </div>
        <CiCircleCheck />
      </div>
    </div>
  );
};

const Quests = () => {
  const themeID = useContext(RefContext);
  const txtColor = themeID ? " text-white " : " text-black ";
  return (
    <div className="pt-7">
      <div className="flex flex-col items-center gap-6 px-7">
        <div
          className={
            "p-4 bg-[#007AFF] flex flex-col items-center rounded-[10px]" +
            (themeID
              ? " bg-[rgba(69,81,84,0.2)] border-[rgba(113,133,213,0.2)]"
              : "   bg-[#007AFF] ")
          }
        >
          <img src="/images/bone.png" alt="bone.png" className=" w-10 h-9" />
          <div className="text-[22px] text-white">0 quests available</div>
        </div>
        <div className={"text-center text-[16px] font-semibold" + txtColor}>
          You will earn points immediately after completing each quest
        </div>
      </div>
      <div className="px-5">
        <QuestElement
          icon={0}
          title={"Subscribe to Melania, dog wif no hat Telegram"}
          tmp={"+90BP"}
          themeID={themeID}
        />
        <QuestElement
          icon={1}
          title={"Subscribe to Melania, dog wif no hat Telegram"}
          tmp={"+90BP"}
          themeID={themeID}
        />
        <QuestElement
          icon={2}
          title={"Subscribe to Melania, dog wif no hat Telegram"}
          tmp={"+90BP"}
          themeID={themeID}
        />
        <QuestElement
          icon={3}
          title={"Subscribe to Melania, dog wif no hat Telegram"}
          tmp={"+90BP"}
          themeID={themeID}
        />
      </div>
      <div className="p-2 mt-4">
        <div className="p-4 bg-[#007AFF] flex justify-between items-center rounded-[10px]">
          <input
            type="text"
            className="border-none focus:outline-none bg-transparent p-2 text-white"
            placeholder="Enter your BASE/EVM Wallet(0x...)"
          />
          <FaRegPaste className=" w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Quests;
