import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import _ from "lodash";
import { getAllLogs } from "../features/slices/projectLogSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

function LogTableComponent() {
  const dispatch = useAppDispatch();
  const projectlogList = useAppSelector(
    (state) => state.projectLog.projectLogs
  );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 8)) // settings 8 days ago's date from current date as default for one of the two datepickers
  );
  const Navigate = useNavigate();
  const { projectId } = useParams();
  const [buttonName, setButtonName] = useState("Add Today's Log Data");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sDate = urlParams.get("startdate");
    const eDate = urlParams.get("enddate");

    if (sDate && eDate) {
      console.log(new Date(sDate), new Date(eDate), "HaHahahhahhahhahahah");
      setStartDate(new Date(sDate));
      setEndDate(new Date(eDate));
    }
  }, []);

  useEffect(() => {
    Navigate(
      `/projects/${projectId}/logs/?startdate=${moment(startDate).format(
        "YYYY-MM-DD"
      )}&enddate=${moment(endDate).format("YYYY-MM-DD")}`
    );
  }, [Navigate, endDate, projectId, startDate]);

  useEffect(() => {
    // console.log("dispatch triggered for changing date");

    dispatch(getAllLogs({ startDate, endDate, projectId }))
      .unwrap()
      .then((data) => {
        console.log(projectlogList, "changing date dispatch successful");

        Object.keys(data).reduce((acc, key) => {
          // this filter function checks if current days log is present or not and accordinggly sets the button name
          if (
            moment(new Date()).format("YYYY-MM-DD") ===
            moment(new Date(key)).format("YYYY-MM-DD")
          ) {
            setButtonName("View Today's Log Data");
          } else {
            setButtonName("Add Today's Log Data");
          }
          return acc;
        }, {});
      })
      .catch(() => {
        setButtonName("Add today's log data");
      });
  }, [Navigate, dispatch, projectId, startDate, endDate]);

  useEffect(() => {
    Navigate(
      `/projects/${projectId}/logs/?startdate=${moment(startDate).format(
        "YYYY-MM-DD"
      )}&enddate=${moment(endDate).format("YYYY-MM-DD")}`
    );
  }, [startDate, endDate]);

  return (
    <>
      {/* tweak mx-18  for changing container  width of this component  */}
      <div className="mx-[90px] mt-10">
        <div className="md:flex justify-between">
          <div>
            <button
              className="w-auto0 h-auto  bg-slate-900 text-gray-400 px-10 py-2.5 rounded-lg border border-gray-500"
              onClick={() => {
                Navigate(
                  `/projects/${projectId}/logs/dailylog?date=${moment(
                    new Date()
                  ).format("YYYY-MM-DD")}`
                );
              }}
            >
              {buttonName}
            </button>
          </div>
          <div>
            <div className="md:flex items-center ">
              <div className="relative">
                <DatePicker
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-10 py-2.5  "
                  selected={endDate}
                  dateFormat="dd-MMM-yyyy"
                  maxDate={startDate}
                  onChange={(date: Date) => {
                    setEndDate(date);
                  }}
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <DatePicker
                  className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-10 py-2.5  "
                  selected={startDate}
                  dateFormat="dd-MMM-yyyy"
                  maxDate={new Date()}
                  minDate={endDate}
                  onChange={(date: Date) => {
                    setStartDate(date);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of component headers */}

        {/* table start here */}
        <div>
          <div className="flex flex-col ">
            <div className="overflow-x-auto overflow-y-auto">
              <div className="py-20 w-full inline-block align-middle ">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="w-1/5 px-5 py-3 text-xs font-bold text-left text-gray-800 uppercase"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 px-5 py-3 text-xs font-bold text-left text-gray-800 uppercase"
                        >
                          COMPOSER
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 px-5 py-3 text-xs font-bold text-left text-gray-800 uppercase"
                        >
                          DATE
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 px-5 py-3 text-xs font-bold text-center text-gray-800 uppercase"
                        >
                          PARTICIPANTS PRESENT
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 px-5 py-3 text-xs font-bold text-center text-gray-800 uppercase "
                        >
                          PARTICIPANTS ABSENT
                        </th>
                        <th scope="col" className="w-20 px-5"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {_.map(projectlogList, (value: any, key: any) => {
                        return (
                          <tr
                            key={key}
                            className="group"
                            onClick={() => {
                              Navigate(
                                `/projects/${projectId}/logs/dailylog?date=${moment(
                                  new Date(key)
                                ).format("YYYY-MM-DD")}`
                              );
                            }}
                          >
                            <td className="w-1/5 px-5 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">
                              {1}
                            </td>
                            <td className="w-1/5 px-5 py-4 text-sm text-gray-400 whitespace-nowrap">
                              {value[0].projectLog_createdBy}
                            </td>
                            <td className="w-1/5 px-5 py-4 text-sm text-gray-400 whitespace-nowrap">
                              {key}
                            </td>
                            <td className="w-1/5 px-5 py-4 text-sm font-medium text-center whitespace-nowrap">
                              <p className="text-green-500 hover:text-green-700">
                                {1}
                              </p>
                            </td>
                            <td className="w-1/5 px-5 py-4 text-sm font-medium text-center whitespace-nowrap">
                              <p className="text-red-500 hover:text-red-700">
                                {1}
                              </p>
                            </td>
                            <td className="   group-hover:text-gray-400 object-center px-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 m3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogTableComponent;
