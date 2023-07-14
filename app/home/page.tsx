"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/view/Header";
import { useAppSelector } from "@/store/hooks";
import { selectUserInfo } from "@/store/features/userInfoSlice";
import { Box, styled } from "@mui/material";
import FlexBox from "@/components/FlexBox";

const StyleHome = styled(Box)(() => ({
  main: {
    display: "flex",
    justifyContent: "center",
  },
}));
export default function Home() {
  const { account } = useAppSelector(selectUserInfo);
  return (
    <StyleHome>
      <Header />
      <Link href="/Upload">Upload</Link>

      <main>
        <FlexBox>
          <div>案件申請</div>
          <div>案件查詢</div>
        </FlexBox>
        <FlexBox>
          <div>修改基本資料</div>
          <div>下載連結</div>
        </FlexBox>
      </main>
    </StyleHome>
  );
}
