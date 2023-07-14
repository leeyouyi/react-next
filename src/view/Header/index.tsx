import React from "react";
import { Box, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUserInfo, setUserInfo } from "@/store/features/userInfoSlice";
import { useRouter } from "next/navigation";

const StyleHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  transition: "all 0.2s ease-in-out",
  padding: "0 30px",
  ".logo": {
    padding: "10px",
  },
  ul: {
    display: "flex",
    listStyle: "none",
  },
  "ul li": {
    padding: "10px",
  },
  "ul .signOut": {
    cursor: "pointer",
  },
}));

const Header = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { account } = useAppSelector(selectUserInfo);

  const doSignOut = () => {
    const clearUserData = {
      account: "",
      userName: "",
    };
    dispatch(setUserInfo(clearUserData));
    router.push("/");
  };

  return (
    <StyleHeader className="header">
      <div className="logo">Logo</div>
      <ul>
        <li>{account}</li>
        <li className="signOut" onClick={doSignOut}>
          登出
        </li>
      </ul>
    </StyleHeader>
  );
};

export default Header;
