import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  addNewMember,
  getAllProjectMember,
} from "../../features/slices/projectMemberSlice";
import { useParams } from "react-router-dom";

function AddMemberModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const [memberName, setMemberName] = useState("");
  const { projectId } = useParams();

  const onAddMember = (e: any) => {
    setMemberName(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addNewMember({ projectMember_name: memberName, projectId: projectId })
    )
      .unwrap()
      .then(() => {
        dispatch(getAllProjectMember({ projectId }))
          .unwrap()
          .then(() => {})
          .catch(() => {});
        setMemberName("");
      })
      .catch(() => {});
  };
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Member
      </button>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full border border-gray-400 bg-gray-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-6 py-6  rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold text-gray-400">
                    Add new Member
                  </h3>

                  <button
                    className="text-lg text-gray-400 md:text-3xl font-sans mb-1"
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
                        value={memberName}
                        className=" bg-slate-900 border-b border-gray-400 text-gray-400 text-sm outline-none focus:bg-slate-900 block w-full p-2.5"
                        placeholder="eg: ABC"
                        onChange={onAddMember}
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

export default AddMemberModal;
