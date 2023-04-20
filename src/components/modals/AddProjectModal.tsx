import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addNewProject } from "../../features/slices/projectSlice";

export default function AddProjectModal() {
  const [showModal, setShowModal] = useState(false);

  const [project, setProject] = useState("");
  //const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log(project, "new project");

  const onAddProject = (e: any) => {
    setProject(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("got into submit");

    dispatch(addNewProject(project));
    setShowModal(false);
  };
  return (
    <>
      <button
        className="flex justify-between h-10 text-green-500 bg-black w-full rounded-lg border border-green-500
        text-lg mt-2 p-2  text-center   items-center"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open regular modal
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
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-6 py-6  rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold">
                    Add new Project
                  </h3>

                  <button
                    className="text-lg md:text-3xl font-sans mb-1"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto w-[350px] md:w-[500px]">
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div>
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

                    <div className="flex items-center px-0 py-3  rounded-b dark:border-gray-600">
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
