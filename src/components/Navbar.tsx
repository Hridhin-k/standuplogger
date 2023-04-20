import React, { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";
import HeaderComponent from "./HeaderComponent";

export function Navbar() {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const onProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };
  return (
    <>
      <nav>
        <div className="flex justify-between bg-slate-700 w-full h-[70px] px-3 py-4">
          <div className="flex justify-start">
            <div className="text-2xl md:text-3xl text-gray-200 mt-1 md:mt-0">
              SLOG
            </div>
            <div className="z-50 items-center mt-1">
              <ProjectDropdown />
            </div>
          </div>
          <div>
            <div onClick={onProfileClick}>
              <button
                type="button"
                className="  text-sm text-gray-50 border border-green-500 md:text- md:w-44 hidden md:block bg-black rounded-full  focus:ring-2 ring-green-500 mt-1 py-1"
                id="user-menu-button "
              >
                profile
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="  w-6 h-6 block md:hidden text-green-500 mt-2"
              >
                <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </div>
            <div
              className={`${profileDropdown ? "block" : "hidden"}  
              ' z-50 shadow-lg w-auto  my-4 text-base   divide-gray-100   mt-7 outline-none rounded-lg`}
              id="user-dropdown"
            >
              <ul className="  text-base text-gray-200 h-auto  border border-gray-200 m-1 rounded-lg">
                <li
                  className="bg-black p-1  my-2 text-center border-b border-gray-200"
                  onClick={(e) => {}}
                >
                  account
                </li>
                <li className="bg-black p-1 my-2  text-center border-b border-gray-200">
                  profile
                </li>
                <li className="bg-black p-1 my-2 text-center ">settings</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="mb-10">
        <HeaderComponent />
      </div>
    </>
  );
}
