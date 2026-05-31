import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Project } from "@/entities/project";
import { fetchProjects } from "@/entities/project";

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

export const loadProjects = createAsyncThunk(
  "projects/loadProjects",
  async () => {
    return await fetchProjects();
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(loadProjects.rejected, (state) => {
        state.loading = false;
        state.error = "Error loading projects";
      });
  },
});

export default projectSlice.reducer;