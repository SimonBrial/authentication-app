import { useState } from "react";
import DropdownItem from "./DropdownItem";
import {
  HiOutlineLogout,
  HiOutlinePencilAlt,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useLocation } from "react-router-dom";

const UserDropDown = () => {
  const [show, setShow] = useState(false);
  const path = useLocation();

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShow((s) => !s)}
          className={`absolute z-20 sm:hover:shadow-md sm:w-[14rem] flex items-center justify-center gap-4 p-2 sm:py-2 cursor-pointer text-violet-400 hover:text-white transition-all right-2 sm:right-10 top-2 sm:top-4 sm:hover:bg-violet-200 rounded-full sm:rounded-md ${
            show ? "bg-violet-200 " : "bg-transparent"
          }`}
        >
          <h2 className="font-bold text-lg hidden sm:block">User Name</h2>
          <div className="border-2 rounded-full border-violet-400 p-1 shadow-md">
            <img
              alt="user photo"
              src="public/user-photo.jpg"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </button>
        {show ? (
          <div className="absolute z-20 right-2 sm:right-10 top-[5.5rem] sm:top-[6rem] rounded-md p-2 bg-violet-200 w-[14rem] flex flex-col gap-1">
            {path.pathname === "/home" ? (
              <DropdownItem
                icon={<HiOutlinePencilAlt />}
                key={crypto.randomUUID()}
                label="Edit Profile"
                dir="/edit"
              />
            ) : (
              <DropdownItem
                icon={<HiOutlineUserCircle />}
                key={crypto.randomUUID()}
                label="Profile"
                dir="/home"
              />
            )}
            <hr className="h-0.5 w-full bg-violet-400" />
            <DropdownItem
              icon={<HiOutlineLogout />}
              key={crypto.randomUUID()}
              label="Log out"
              dir="/"
            />
          </div>
        ) : (
          <></>
        )}
        {show ? (
          <span className="bg-black/30 fixed sm:hidden z-10 h-screen w-screen"></span>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
};

export default UserDropDown;
