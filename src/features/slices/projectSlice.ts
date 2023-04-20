import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CounterState {
  projects: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  projects: [
    "junclecat",
    "check work rights",
    "man with a van",
    "chatbot",
    "junclecat",
    "check work rights",
    "man with a van",
    "chatbot",
  ],
  //projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addNewProject } = projectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.projects.projects;

export default projectSlice.reducer;
