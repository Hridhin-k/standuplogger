import axios from "axios";

const fetchAllLogs = (data: any) =>
  axios.get(
    `http://localhost:3001/logs?startDate=${data.startDate}&endDate=${data.endDate}&projectId=${data.projectId}`
  );
const fetchDailyLogData = (data: {
  currentDate: Date;
  projectId: string | undefined;
}) =>
  axios.get(
    `http://localhost:3001/dailylog?date=${data.currentDate}&projectId=${data.projectId}`
  );
// const createNewProject = (data: { project_name: string }) => {

//   axios.post("http://localhost:3001/projects/add", data);
// };
export { fetchAllLogs, fetchDailyLogData };
