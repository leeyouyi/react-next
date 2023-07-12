"use client";
import Link from "next/link";
import FileUpload from "../src/components/FileUpload";
import Button from "../src/components/Button";

export default function Post() {
  return (
    <>
      <Button>按鈕</Button>
      <Link href="/">回Home</Link>
      <FileUpload />
    </>
  );
}
