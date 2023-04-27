import axios from "axios";

const fetchAllProjects = () => axios.get("http://localhost:3001/projects");
console.log(fetchAllProjects, "what is fetch all project");
const createNewProject = (data: { project_name: string }) => {
  console.log(data, "AAAAAAAAAAAAAAAAAAAAAAAAA");

  axios.post("http://localhost:3001/projects/add", data);
};

export { fetchAllProjects, createNewProject };
