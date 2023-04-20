import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addNewProject } from "../features/slices/projectSlice";

function NewProject() {
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState("");
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log(project, "new project");

  const onModalToggle = () => {
    setModal(true); //navigate alone is enough to close the modal
    Navigate("/projects");
  };
  const onAddProject = (e: any) => {
    setProject(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("got into submit");

    dispatch(addNewProject(project));
  };
  return (
    <>
      <div className=" flex justify-center  p-4 backdrop-blur-md">
        <div
          className={` ${
            modal ? "hidden" : "block"
          } border border-green-500 z-100  p-3 relative w-full max-w-lg max-h-full rounded-lg bg-slate-800`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="  ' text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="medium-modal"
              onClick={onModalToggle}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-3">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block px-1 mb-2 text-base  text-gray-900 dark:text-white"
                >
                  Add new project
                </label>
                <input
                  type="text"
                  name="projectName"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="eg: Project X"
                  onChange={onAddProject}
                  required
                />
              </div>

              <div className="flex items-center p-4 space-x-2  rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProject;
