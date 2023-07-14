"use client";
import { selectUserInfo } from "@/store/features/userInfoSlice";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RouterPage() {
  const router = useRouter();
  const { account } = useAppSelector(selectUserInfo);
  useEffect(() => {
    console.log(router);
    if (account !== "") {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <></>;
}
