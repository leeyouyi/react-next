import React from "react";
import { Box, styled } from "@mui/material";

const StyleRegister = styled(Box)(() => ({
  display: "flex",
}));

const Register = (): JSX.Element => {
  return <StyleRegister className="Register">登入</StyleRegister>;
};

export default Register;
