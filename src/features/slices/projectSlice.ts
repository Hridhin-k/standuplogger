import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { createNewProject, fetchAllProjects } from "../../api/project";

export const getAllProjects = createAsyncThunk("/projects", async () => {
  const projectList = await fetchAllProjects();
  console.log(projectList.data, "this is the project");

  return projectList.data;
});

export const addNewProject = createAsyncThunk(
  "/project/add",
  async (data: { project_name: string }) => {
    const newProject = await createNewProject(data);
    return newProject;
  }
);

// Define a type for the slice state
interface ProjectState {
  projects: [];
}

// Define the initial state using that type
const initialState: ProjectState = {
  // projects: ["junclecat", "check work rights", "man with a van", "chatbot"],
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // addNewProject: (state, action) => {
    //   state.projects.push(action.payload);
    //   console.log(action.payload, "inside slice reducer");
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProjects.fulfilled, (state, action) => {
      console.log(action.payload, "action .payload");

      state.projects = action.payload;
    });
    builder.addCase(getAllProjects.rejected, (state, action) => {
      console.log("error occured", action);
    });
  },
});

//export const { addNewProject } = projectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.projects.projects;

export default projectSlice.reducer;
