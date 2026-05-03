import { Outlet } from "react-router";
import { ScrollToTop } from "./scroll-to-top";

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
