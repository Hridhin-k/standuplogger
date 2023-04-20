import React, { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";

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
                className="  text-sm text-gray-50 border-2 border-green-500 md:text- md:w-44 hidden md:block bg-black rounded-full  focus:ring-2 ring-green-500 mt-1 py-1"
                id="user-menu-button "
              >
                profile
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="  w-6 h-6 block md:hidden text-green-500 mt-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <div
              className={`${profileDropdown ? "block" : "hidden"}  
              ' z-50 shadow-lg w-auto  my-4 text-base  bg-white  divide-gray-100   dark:bg-gray-700 dark:divide-gray-600 mt-8 outline-none rounded-lg`}
              id="user-dropdown"
            >
              <ul className=" bg-gray-50 text-base text-slate-900 h-auto  border-2 border-blue-500 rounded-lg">
                <li
                  className="bg-slate-500 p-1 m-1 hover:bg-slate-200 text-center"
                  onClick={(e) => {
                    console.log(e.target, "setting onclick");
                  }}
                >
                  account
                </li>
                <li className="bg-slate-500 p-1 m-1 hover:bg-slate-200 text-center">
                  profile
                </li>
                <li className="bg-slate-500 p-1 m-1 hover:bg-slate-200 text-center">
                  settings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
