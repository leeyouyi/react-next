import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

/** 使用者資訊 */
export interface IuserInfo {
  /** 使用者序號 */
  userSuid: string;
  /** 使用者帳號 */
  account: string;
  /** 使用者姓名 */
  userName: string;
  /** 票號 */
  token: string;
  /** 機關序號 */
  orgSuid: string;
  /** 機關代碼 */
  orgCode: string;
  /** 機關名稱 */
  orgName: string;
  /** 登入時間 */
  loginTime: string;
  /** 是否顯示公告內容 */
  isShowBoard: boolean;
  /** 選單物件清單 */
  // menuItemList: string;
}

export const initUserInfo: IuserInfo = {
  userSuid: "",
  account: "",
  userName: "",
  token: "",
  orgSuid: "",
  orgCode: "",
  orgName: "",
  loginTime: "",
  isShowBoard: false,
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
