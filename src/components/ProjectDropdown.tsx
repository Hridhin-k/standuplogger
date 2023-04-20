import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

function ProjectDropdown() {
  const [dropDown, setDropdown] = useState(false);
  const [projectName, setProjectName] = useState("");
  const projectList = useAppSelector((state: any) => state.projects.projects);
  const Navigate = useNavigate();
  console.log(projectList, "project list from store");

  useEffect(() => {
    if (projectList.length !== 0) {
      //conditionaly set project name in dropdown box
      setProjectName(projectList[0]);
    } else {
      Navigate("/projects/newProject");
    }
  }, [projectList, Navigate]);

  const onDropdownToggle = () => {
    setDropdown(!dropDown);
  };
  const onSelectProject = (e: any) => {
    setProjectName((e.target as HTMLElement).innerHTML);
    setDropdown(false);
  };
  return (
    <>
      <button
        className=" ml-6 md:ml-8 text-gray-100 w-48 md:w-64  bg-black   focus:outline-none  focus:ring-gray-50
 rounded-full  text-base  px-4 py-1  text-center inline-flex items-center
   truncate"
        type="button"
        onClick={onDropdownToggle}
      >
        {projectName}
        <svg
          className="w-4 h-4 ml-auto"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={` ${
          dropDown ? "block" : "hidden"
        } z-50 border w-auto ml-2.5 md:ml-8 border-gray-200 mt-7 rounded-lg bg-whites p-1`}
      >
        <div>
          <ul className="overflow-auto h-[160px] rounded-lg ">
            {projectList.map((projectNames: string, index: number) => {
              return (
                <li
                  key={projectNames + index}
                  value={projectNames}
                  className={
                    "flex justify-between bg-black text-sm py-1 px-2 border-b border-gray-200 text-center text-gray-50 "
                  }
                  onClick={(e) => onSelectProject(e)}
                >
                  <div className="">{projectNames}</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="flex justify-between h-10 text-green-500 bg-black w-full rounded-lg border border-green-500
           text-lg mt-2 p-2  text-center   items-center"
          onClick={() => {
            console.log("onclick new project button");
            Navigate("/projects/newProject");
            setDropdown(false);
          }}
        >
          <button className=" " type="button">
            Add a Project
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdown;
