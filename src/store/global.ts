import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalStoreProps } from ".";

declare interface IInitialState {
  listJobs: JobInformation[];
  currentJobs: JobInformation;
}

const initialState: IInitialState = {
  listJobs: [],
  currentJobs: {
    jobTitle: "",
    companyTitle: "",
    salaryRange: "",
    srcPath: "",
    jobTypes: "Full-Time",
  },
};

const slice = createSlice({
  name: "Global",
  initialState: initialState,
  reducers: {
    updateCurrentList: (state, action: PayloadAction<JobInformation[]>) => {
      state.listJobs = action.payload;
    },
    setCurrentJob: (state, action: PayloadAction<JobInformation>) => {
      state.currentJobs = action.payload;
    },
  },
});

export const globalState = (state: GlobalStoreProps) => state.global;

export const { setCurrentJob, updateCurrentList } = slice.actions;
export default slice.reducer;
