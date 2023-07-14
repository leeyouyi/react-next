"use client";
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FlexBox, { EjustifyContent } from "@/components/FlexBox";
import { useAppDispatch } from "@/store/hooks";
import { setUserInfo } from "@/store/features/userInfoSlice";
import { useRouter } from "next/navigation";
import { closeLoading, showLoading } from "@/store/features/loadingCountSlice";

const StyleRegister = styled(Box)(() => ({
  main: {
    display: "flex",
    justifyContent: "center",
    minHeight: "500px",
    fontSize: "1rem",
    background: "rgba(206,212,218,0.4)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  ".loginWrap": {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: "40px",
    padding: "40px 45px 40px 45px",
    width: "420px",
    margin: "30px 0 15px 0",
    position: "relative",
  },
  ".loginWrap h1": {
    marginBottom: "30px",
  },
  ".loginWrap .textInput": {
    marginBottom: "30px",
  },
  ".buttonBox": {
    marginTop: "20px",
  },
}));

const Register = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const doRegister = () => {
    dispatch(showLoading());
    const testData = {
      /** 使用者帳號 */
      account: "test",
      /** 使用者姓名 */
      userName: "test",
    };
    setTimeout(() => {
      dispatch(closeLoading());
      dispatch(setUserInfo(testData));
      router.push("/home");
    }, 1000);
  };

  return (
    <StyleRegister className="Register">
      <main>
        <Box className="loginWrap">
          <h1>旅宿業者註冊</h1>
          <TextField
            className="textInput"
            id="input-with-icon-textfield"
            label="統一編號"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="textInput"
            id="input-with-icon-textfield"
            label="密碼"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="textInput"
            id="input-with-icon-textfield"
            label="密碼確認"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="textInput"
            id="input-with-icon-textfield"
            label="電子郵件"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <FlexBox justifyContent={EjustifyContent.around}>
            <Button variant="outlined">取消</Button>
            <Button
              className="buttonBox"
              variant="contained"
              onClick={doRegister}
            >
              送出
            </Button>
          </FlexBox>
        </Box>
      </main>
    </StyleRegister>
  );
};

export default Register;
