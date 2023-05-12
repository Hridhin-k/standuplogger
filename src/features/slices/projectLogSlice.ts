import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllLogs, fetchDailyLogData } from "../../api/projectLog";

export interface ProjectLogState {
  projectLogs: [];
  ProjectDailyLogs: [];
}
const initialState: ProjectLogState = { projectLogs: [], ProjectDailyLogs: [] };

export const getAllLogs = createAsyncThunk("log", async (data: any) => {
  const logdata = await fetchAllLogs(data);
  return logdata.data;
});
export const getDailyProjectLog = createAsyncThunk(
  "dailylog",
  async (data: { currentDate: Date; projectId: string | undefined }) => {
    const dailyLogData = await fetchDailyLogData(data);

    return dailyLogData.data;
  }
);
export const projectLogSlice = createSlice({
  name: "projectLog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLogs.fulfilled, (state, action) => {
      state.projectLogs = action.payload;
    });
    builder.addCase(getAllLogs.rejected, (state) => {});

    builder.addCase(getDailyProjectLog.fulfilled, (state, action) => {
      state.ProjectDailyLogs = action.payload;
    });
    builder.addCase(getDailyProjectLog.rejected, (state) => {});
  },
});
export default projectLogSlice.reducer;
