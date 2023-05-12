import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewProject, fetchAllProjects } from "../../api/project";
interface ProjectState {
  projects: [];
}
const initialState: ProjectState = {
  projects: [],
};
export const getAllProjects = createAsyncThunk("projects", async () => {
  const projectData = await fetchAllProjects();

  return projectData.data;
});
export const addNewProject = createAsyncThunk(
  "add",
  async (data: { project_name: string }) => {
    createNewProject(data);
  }
);

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(getAllProjects.rejected, (state, action) => {});
    builder.addCase(addNewProject.fulfilled, (state) => {});
    builder.addCase(addNewProject.rejected, (action) => {});
  },
});
export default projectSlice.reducer;
