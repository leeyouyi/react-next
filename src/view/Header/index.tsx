import React from "react";
import { Box, styled } from "@mui/material";

const StyleHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  transition: "all 0.2s ease-in-out",
  padding: "0 15px",
}));

const Header = (): JSX.Element => {
  // const handleLogout = async (): Promise<void> => {
  //   const response = await doAxios(MethodEnum.post, "/doLogout");
  //   if (response == null) return;

  //   const { rtnCode } = response.data;
  //   if (rtnCode === ErtnCode.成功) {
  //     dispatch(setUserInfo(initUserInfo));
  //     navigate(Erouter.login);
  //   }
  // };
  return (
    <StyleHeader className="header">
      <div>Logo</div>
      <ul>
        <li>user</li>
        <li>登出</li>
      </ul>
    </StyleHeader>
  );
};

export default Header;
