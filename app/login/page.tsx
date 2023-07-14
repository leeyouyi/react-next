"use client";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FlexBox, { EjustifyContent } from "@/components/FlexBox";
import { useAppDispatch } from "@/store/hooks";
import { setUserInfo } from "@/store/features/userInfoSlice";
import { useRouter } from "next/navigation";
import { closeLoading, showLoading } from "@/store/features/loadingCountSlice";

const StyleLogin = styled(Box)(() => ({
  main: {
    fontSize: "1rem",
    background: "rgba(206,212,218,0.4)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  ".container": {
    display: "flex",
    justifyContent: "center",
    minHeight: "400px",
  },
  ".loginWrap": {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "10px",
    width: "430px",
    position: "relative",
    backgroundColor: "white",
    ".log-title": {
      textAlign: "center",
      marginTop: "10px",
      p: {
        fontSize: "1.4rem",
        fontWeight: "600",
        color: "black",
      },
    },
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

const Login = () => {
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
    <StyleLogin className="Login">
      <main>
        <Container className="container">
          <Box className="loginWrap">
            <FlexBox className="logo" justifyContent={EjustifyContent.center}>
              <img src="/logo-dark.png" alt="" height="50" />
            </FlexBox>
            <div className="log-title">
              <p>交通部觀光局 旅宿業者補助申請平台</p>
            </div>
            <form>
              <FlexBox>
                <span className="input-group-addon">
                  <i className="icon-user-large"></i>
                </span>
                <TextField
                  className="textInput"
                  id="input-with-sx"
                  label="統一編號"
                  variant="standard"
                />
              </FlexBox>
            </form>

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

            <FlexBox
              justifyContent={EjustifyContent.around}
              className="buttonBox"
            >
              <Button variant="outlined">取消</Button>
              <Button variant="contained" onClick={doRegister}>
                登入
              </Button>
            </FlexBox>
          </Box>
        </Container>
      </main>
    </StyleLogin>
  );
};

export default Login;
