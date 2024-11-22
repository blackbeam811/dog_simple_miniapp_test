import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { RefContext } from "../contexts/RefContextProvider";

const Header = () => {
  const { themeID, setThemeID } = useContext(RefContext);
  return (
    <div
      className={
        "w-full py-3 px-7 fixed top-0 " +
        (themeID
          ? "bg-[#1C1C1D] border-b-[1px] border-b-[#979797]"
          : "bg-[#007AFF]")
      }
    >
      <div className="flex justify-between text-white items-center py-1">
        <div onClick={() => {}}>Cancel</div>
        <div className="flex space-x-1 items-center">
          <div>Mellionaries Bot </div>
          <BiSolidBadgeCheck className=" text-500" />
        </div>
        <IoEllipsisHorizontalCircleOutline className="w-6 h-auto" />
      </div>
    </div>
  );
};

export default Header;
