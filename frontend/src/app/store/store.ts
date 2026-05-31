import { configureStore } from "@reduxjs/toolkit";
import { skillReducer,projectReducer} from "@/app";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;