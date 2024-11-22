import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RefContext } from "../contexts/RefContextProvider";
const Footer = () => {
  const [active, setActive] = useState(0);
  const { themeID } = useContext(RefContext);

  return (
    <div
      className={
        "w-full rounded-t-lg flex justify-center items-center space-x-10 fixed bottom-0 p-3 text-xs " +
        (themeID
          ? "bg-[#1C1C1D] border-t-2 border-t-[#455154]"
          : "bg-[#007AFF]")
      }
    >
      <Link
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setActive(0)}
        to="/doghouse"
      >
        <img
          src={
            active === 0
              ? themeID
                ? "/images/doghouse_3.png"
                : "/images/doghouse_2.png"
              : themeID
              ? "/images/doghouse_1.png"
              : "/images/doghouse_2.png"
          }
          alt="doghouse.png"
          className="w-5 h-5"
        />
        <div
          className={
            active === 0
              ? themeID
                ? "text-[#007AFF]"
                : "text-white"
              : themeID
              ? "text-white"
              : "text-black"
          }
        >
          Dog House
        </div>
      </Link>
      <Link
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setActive(1)}
        to="/quests"
      >
        <img
          src={
            active === 1
              ? themeID
                ? "/images/quest_3.png"
                : "/images/quest_2.png"
              : themeID
              ? "/images/quest_1.png"
              : "/images/quest_2.png"
          }
          alt="doghouse.png"
          className="w-5 h-5"
        />
        <div
          className={
            active === 1
              ? themeID
                ? "text-[#007AFF]"
                : "text-white"
              : themeID
              ? "text-white"
              : "text-black"
          }
        >
          Quests
        </div>
      </Link>
      <Link
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setActive(2)}
        to="/dogandcat"
      >
        <img
          src={
            active === 2
              ? themeID
                ? "/images/dog_cat_3.png"
                : "/images/dog_cat_2.png"
              : themeID
              ? "/images/dog_cat_1.png"
              : "/images/dog_cat_2.png"
          }
          alt="doghouse.png"
          className="w-5 h-5"
        />
        <div
          className={
            active === 2
              ? themeID
                ? "text-[#007AFF]"
                : "text-white"
              : themeID
              ? "text-white"
              : "text-black"
          }
        >
          Cats and Dogs
        </div>
      </Link>
    </div>
  );
};

export default Footer;
