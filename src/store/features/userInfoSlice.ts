import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

/** 使用者資訊 */
export interface IuserInfo {
  /** 使用者帳號 */
  account: string;
  /** 使用者姓名 */
  userName: string;
}

export const initUserInfo: IuserInfo = {
  account: "",
  userName: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initUserInfo,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IuserInfo>) => action.payload,
    updateUserInfo: (state, action: PayloadAction<IuserInfo>) => ({
      ...state,
      value: action.payload,
    }),
  },
});

export const { setUserInfo, updateUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state: RootState): IuserInfo => state.userInfo;

/** 使用者資訊 */
const userInfoReducer = userInfoSlice.reducer;
export default userInfoReducer;
