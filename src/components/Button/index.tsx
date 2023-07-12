import React from "react";
import { Button as MuiButton, type ButtonProps, styled } from "@mui/material";
// import { isUndefined } from "tv-react/consts";

const StyledButton = styled(MuiButton)<ButtonProps>(({
  theme,
  color = "primary",
  size = "medium",
  variant,
  disabled,
}) => {
  const { palette } = theme;

  return [
    // 共用
  ];
});

const Button = (props: ButtonProps): JSX.Element => {
  const { variant = "contained", ...other } = props;
  return <StyledButton {...{ variant, ...other }} />;
};

export default Button;
