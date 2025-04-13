// app/ReduxProvider.tsx
"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
 // o'z yo'lingni moslashtir

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
