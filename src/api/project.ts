import axios from "axios";

const fetchAllProjects = () => axios.get("http://localhost:3001/projects");
const createNewProject = (data: { project_name: string }) => {
  axios.post("http://localhost:3001/projects/add", data);
};

export { fetchAllProjects, createNewProject };
