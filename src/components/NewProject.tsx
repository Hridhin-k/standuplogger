import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState("");
  const Navigate = useNavigate();
  const onModalToggle = () => {
    console.log("clicked");

    setModal(true); //navigate alone is enough to close the modal
    Navigate("/projects");
  };
  const onSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
  };
  //w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full
  return (
    <>
      <div className="flex justify-center  p-4 backdrop-blur-md">
        {/* <div
        id="medium-modal"
        className={` ${
          modal ? "hidden" : "block"
        } top-0 left-0 right-0 z-50 p-4 `}
      >
        <div className="relative w-full max-w-lg max-h-full">
          <div className="relative text-black bg-gray-500 rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium  dark:text-white">
                Default modal
              </h3> */}
        <div
          className={` ${
            modal ? "hidden" : "block"
          } border border-green-500 z-50  p-3 relative w-full max-w-lg max-h-full rounded-lg bg-slate-800`}
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
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-3">
            <form className="space-y-6" onSubmit={(e) => onSubmit}>
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
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex items-center p-4 space-x-2  rounded-b dark:border-gray-600">
            <button
              data-modal-hide="medium-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
    </>
  );
}

export default NewProject;
