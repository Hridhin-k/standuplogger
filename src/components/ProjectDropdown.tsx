import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import AddProjectModal from "./modals/AddProjectModal";
import { getAllProjects } from "../features/slices/projectSlice";

function ProjectDropdown() {
  const dispatch = useAppDispatch();
  const [dropDown, setDropdown] = useState(false);
  const [projectName, setProjectName] = useState("");
  const projectList = useAppSelector((state: any) => state.projects.projects);
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projectList.length !== 0) {
      //conditionaly set project name in dropdown box
      setProjectName(projectList[0].project_name);
      Navigate(`/projects/${projectList[0].project_id}`);
    } else {
      setProjectName("");
    }
  }, [projectList]);

  const onDropdownToggle = () => {
    setDropdown(!dropDown);
  };

  return (
    <>
      <button
        className=" ml-6 md:ml-8 text-gray-400 w-48 md:w-64  bg-black   focus:outline-none  focus:ring-gray-400
 rounded-full  text-base  px-4 py-1  text-center inline-flex items-center border  border-green-500
   truncate"
        type="button"
        onClick={onDropdownToggle}
      >
        {projectName}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      <div
        className={` ${
          dropDown ? "block" : "hidden"
        } z-50 border w-auto ml-2.5 md:ml-8 border-gray-400 mt-7 rounded-lg bg-whites py-1 bg-black`}
      >
        <ul className="overflow-auto h-[165px] rounded-lg bg-black">
          {projectList.map((projectNames: any) => {
            return (
              <li
                key={projectNames.project_id}
                className={
                  "flex justify-between bg-black text-sm m-0 py-1 px-4   border-b border-gray-400 text-center text-gray-400 "
                }
                onClick={() => {
                  setProjectName(projectNames.project_name);
                  Navigate(`/projects/${projectNames.project_id}`);
                  setDropdown(false);
                }}
              >
                <div>{projectNames.project_name}</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                    <path d="M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mx-1">
          <AddProjectModal />
        </div>
      </div>
    </>
  );
}

export default ProjectDropdown;
