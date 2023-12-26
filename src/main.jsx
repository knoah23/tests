import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  FullNamePage,
  FundWalletPage,
  Home,
  LocationPage,
  ManualLocationPage,
  OTPPage,
  PaymentPage,
  PhoneNumberPage,
  PostRequestPage,
  SplashScreen,
  TermsAndConditions,
  UploadImagePage,
  WelcomePage,
  WorkmanshipFeePage,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  // ONBOARDING PAGES
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/phone-number",
    element: <PhoneNumberPage />,
  },
  {
    path: "/OTP",
    element: <OTPPage />,
  },
  {
    path: "/name",
    element: <FullNamePage />,
  },
  {
    path: "/fund-wallet",
    element: <FundWalletPage />,
  },
  {
    path: "/T&Cs",
    element: <TermsAndConditions />,
  },
  {
    path: "/location",
    element: <LocationPage />,
  },
  {
    path: "/manual-location",
    element: <ManualLocationPage />,
  },
  {
    path: "/upload-image",
    element: <UploadImagePage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },

  // BOOKING PAGES
  {
    path: "/post",
    element: <PostRequestPage />,
  },
  {
    path: "/fee",
    element: <WorkmanshipFeePage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
