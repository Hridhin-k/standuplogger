import axios from "axios";
const fetchMemberData = (data: { projectId: string | undefined }) =>
  axios.get(`http://localhost:3001/projectmember?projectId=${data.projectId}`);
const createNewMember = (data: {
  projectMember_name: string;
  projectId: string | undefined;
}) => axios.post(`http://localhost:3001/addmember`, data);
export { fetchMemberData, createNewMember };
