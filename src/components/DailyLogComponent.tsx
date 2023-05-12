import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment } from "react";
import {
  AccordionHeader,
  AccordionBody,
  Accordion,
} from "@material-tailwind/react";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getDailyProjectLog } from "../features/slices/projectLogSlice";
import { getAllProjectMember } from "../features/slices/projectMemberSlice";
import AddMemberModal from "./modals/AddMemberModal";

function DailyLogComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const Navigate = useNavigate();
  const [open, setOpen] = useState(0);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();
  const projectMembers = useAppSelector(
    (state) => state.projectMember.projectMember
  );
  const dailyProjectLogData = useAppSelector(
    (state) => state.projectDailyLog.ProjectDailyLogs
  );
  // console.log(dailyProjectLogData, "daily log data");

  // --------------------------logGroupedByCurrentDaysDate----------------------------------------------------
  const logGroupedByCurrentDaysDate = dailyProjectLogData.filter(
    (logData: any) => {
      return (
        moment(logData.projectLog_createdAt).format("YYYY-MM-DD") ===
        moment(currentDate).format("YYYY-MM-DD")
      );
    }
  );
  // console.log(logGroupedByCurrentDaysDate, "BLAblabla");
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------logGroupedByPreviousDateOfCurrentDate-------------------------------------------
  const logGroupedByPreviousDateOfCurrentDate = dailyProjectLogData.filter(
    (logData: any) => {
      return (
        moment(logData.projectLog_createdAt).format("YYYY-MM-DD") ===
        moment(
          new Date(new Date(currentDate).setDate(currentDate.getDate() - 1))
        ).format("YYYY-MM-DD")
      );
    }
  );
  // console.log(logGroupedByPreviousDateOfCurrentDate, "HAHAHAHAHAHAH");
  // -----------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const componentDate = urlParams.get("date");
    if (componentDate) {
      setCurrentDate(new Date(componentDate));
    }
  }, []);
  useEffect(() => {
    Navigate(`?date=${moment(currentDate).format("YYYY-MM-DD")}`);
  }, [currentDate]);
  useEffect(() => {
    dispatch(getDailyProjectLog({ currentDate, projectId }))
      .unwrap()
      .then(() => {})
      .catch(() => {});
    dispatch(getAllProjectMember({ projectId }))
      .unwrap()
      .then(() => {})
      .catch(() => {});
  }, [currentDate, dispatch, projectId]);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="md:mx-[90px] px-5 md:px-0 mt-10">
        <div className="flex justify-between ">
          <div
            className="mx-0"
            onClick={() => {
              Navigate(`/projects/${projectId}/logs`);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-400  md:hidden mt-3 flex justify-start"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <button className=" md:inline-flex   rounded-lg text-gray-400 hidden text-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              All Logs
            </button>
          </div>
          <div>
            <DatePicker
              className="text-center bg-gray-400 py-1.5 px-3 rounded-lg"
              dateFormat="dd-MMM-yyyy"
              selected={currentDate}
              maxDate={new Date()}
              onChange={(date: Date) => {
                setCurrentDate(date);
              }}
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-400 block md:hidden mt-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            <button className="bg-slate-900 text-gray-400 rouded-lg border border-gray-400 py-1.5 px-2 md:inline-flex hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="relative top-0 left-0 my-7">
          <AddMemberModal />
        </div>
        <div className=" h-[600px] scrollable-section overflow-auto  ">
          <div>
            {projectMembers.map((member: any) => {
              return (
                <Accordion
                  open={open === member.projectMember_id}
                  className=" my-10 bg-slate-900 rounded-lg h-auto text-gray-400 px-4 py-1"
                  key={member.projectMember_id}
                >
                  <AccordionHeader
                    className="rounded-lg border-none inline-flex "
                    onClick={() => handleOpen(member.projectMember_id)}
                  >
                    {member.projectMember_name}
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="md:flex md:justify-between">
                      <div className="min-h-[200px] h-auto rounded-lg w-100 md:w-1/2 my-3  mx-3 md:my-0 ">
                        <ul>
                          {logGroupedByPreviousDateOfCurrentDate.map(
                            (logList: any) => {
                              return (
                                <li
                                  className="bg-black w-1/2 py-1.5 rounded-full px-4 my-5 mx-[25%] items-center text-red-800"
                                  key={
                                    logList.projectLog_Data +
                                    logList.ProjectLog_id
                                  }
                                >
                                  {logList.projectLog_memberId ===
                                  member.projectMember_id
                                    ? logList.projectLog_Data
                                    : null}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      <div className="min-h-[200px] h-auto rounded-lg w-100 md:w-1/2 my-3  mx-3 md:my-0  ">
                        <ul>
                          {logGroupedByCurrentDaysDate.map((logList: any) => {
                            return (
                              <li
                                className={`${
                                  logList.projectLog_memberId ===
                                  member.projectMember_id
                                    ? "block"
                                    : "hidden"
                                }  bg-black w-1/2 py-1.5 rounded-full px-4 my-5 mx-[25%] items-center text-green-500`}
                                key={
                                  logList.projectLog_Data +
                                  logList.ProjectLog_id
                                }
                              >
                                {logList.projectLog_memberId ===
                                member.projectMember_id
                                  ? logList.projectLog_Data
                                  : null}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyLogComponent;
