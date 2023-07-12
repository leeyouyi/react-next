import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

// Define a type for the slice state
type IloadingCount = number;

const initialState: IloadingCount = 0;
const loadingCountSlice = createSlice({
  name: "loadingCount",
  initialState,
  reducers: {
    showLoading: (state) => (state += 1),
    closeLoading: (state) => (state - 1 >= 0 ? (state -= 1) : 0),
  },
});

export const { showLoading, closeLoading } = loadingCountSlice.actions;
export const selectLoadingCount = (state: RootState): IloadingCount =>
  state.loadingCount;

/** loading 數量 - 大於 0 應顯示 loading */
const loadingCountReducer = loadingCountSlice.reducer;
export default loadingCountReducer;
