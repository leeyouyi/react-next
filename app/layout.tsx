import "./globals.css";
import "@/assets/_icomoon.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import LoadingMask from "@/components/LoadingMask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const gtagBody = `<p>
此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟
JavaScript。
</p>`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <noscript dangerouslySetInnerHTML={{ __html: gtagBody }} />
        <Providers>
          <LoadingMask />
          {children}
        </Providers>
      </body>
    </html>
  );
}
