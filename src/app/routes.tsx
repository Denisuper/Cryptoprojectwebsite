import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { GetFundedPage } from "./pages/get-funded-page";
import { ContactPage } from "./pages/contact-page";
import { WhitepaperPage } from "./pages/whitepaper-page";
import { PairsPage } from "./pages/pairs-page";
import { RootLayout } from "./components/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "get-funded",
        Component: GetFundedPage,
      },
      {
        path: "pairs",
        Component: PairsPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "whitepaper",
        Component: WhitepaperPage,
      },
    ],
  },
]);