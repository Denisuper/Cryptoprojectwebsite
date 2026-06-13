import { Outlet } from "react-router";
import { ScrollToTop } from "./scroll-to-top";
import { CustomCursor } from "./custom-cursor";

export function RootLayout() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
