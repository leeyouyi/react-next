"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RouterPage() {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
    router.push("/home");
  }, [router]);

  return <></>;
}
