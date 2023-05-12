import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/slices/projectSlice";
import projectLogReducer from "../features/slices/projectLogSlice";
import projectMemberReducer from "../features/slices/projectMemberSlice";
export const store = configureStore({
  reducer: {
    projects: projectReducer,
    projectLog: projectLogReducer,
    projectDailyLog: projectLogReducer,
    projectMember: projectMemberReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
