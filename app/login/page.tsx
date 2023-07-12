import React from "react";
import { Box, styled } from "@mui/material";

const StyleLogin = styled(Box)(() => ({
  display: "flex",
}));

const Login = (): JSX.Element => {
  return <StyleLogin className="Login">登入</StyleLogin>;
};

export default Login;
