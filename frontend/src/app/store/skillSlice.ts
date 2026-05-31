import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Skill } from "@/entities";
import { fetchSkills } from "@/entities";

interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}

const initialState: SkillState = {
  skills: [],
  loading: false,
  error: null,
};

export const loadSkills = createAsyncThunk(
  "skill/loadSkills",
  async () => {
    return await fetchSkills();
  }
);

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(loadSkills.rejected, (state) => {
        state.loading = false;
        state.error = "Error loading skills";
      });
  },
});

export default skillSlice.reducer;