import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewMember, fetchMemberData } from "../../api/projectMember";
interface ProjectMember {
  projectMember: [];
}
const initialState: ProjectMember = { projectMember: [] };

export const getAllProjectMember = createAsyncThunk(
  "projectMember",
  async (data: { projectId: string | undefined }) => {
    const getMemberData = await fetchMemberData(data);

    return getMemberData.data;
  }
);
export const addNewMember = createAsyncThunk(
  "addMember",
  async (data: {
    projectMember_name: string;
    projectId: string | undefined;
  }) => {
    await createNewMember(data);
  }
);
const projectMemberSlice = createSlice({
  name: "projectMember",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProjectMember.fulfilled, (state, action) => {
      state.projectMember = action.payload;
    });
    builder.addCase(getAllProjectMember.rejected, (state) => {});
    builder.addCase(addNewMember.fulfilled, (state) => {});
    builder.addCase(addNewMember.rejected, (state) => {});
  },
});

export default projectMemberSlice.reducer;
