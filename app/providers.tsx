"use client";

import store from "@/store";
import { Provider } from "react-redux";
import RouterPage from "./page";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}> {children}</Provider>;
}
