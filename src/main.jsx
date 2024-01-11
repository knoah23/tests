import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  AboutUs,
  AllImages,
  AllServices,
  ArtisianProfile,
  ChangePhoneNumberPage,
  Contact,
  CreatedJobs,
  FullNamePage,
  FundWalletPage,
  HelpAndSupportPage,
  HistoryDetailsPage,
  HistoryPage,
  Home,
  InboxDetailsPage,
  InboxPage,
  JobDetail,
  LandingPage,
  LocationPage,
  ManualLocationPage,
  OTPPage,
  OurServices,
  PaymentPage,
  PhoneNumberPage,
  PostRequestPage,
  SplashScreen,
  TermsAndConditions,
  UploadImagePage,
  UserAccountPage,
  WalletPage,
  WelcomePage,
  WorkmanshipFeePage,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/our-services",
    element: <OurServices />,
  },
  // ONBOARDING PAGES
  {
    path: "/splash",
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
  {
    path: "/services",
    element: <AllServices />,
  },
  {
    path: "/created-jobs",
    element: <CreatedJobs />,
  },
  {
    path: "/job-detail",
    element: <JobDetail />,
  },
  {
    path: "/aritisian-profile",
    element: <ArtisianProfile />,
  },
  {
    path: "/images",
    element: <AllImages />,
  },

  // INBOX RELATED PAGES
  {
    path: "/inbox",
    element: <InboxPage />,
  },
  {
    path: "/inbox-details",
    element: <InboxDetailsPage />,
  },

  // HISTORY RELATED PAGES
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/history-details",
    element: <HistoryDetailsPage />,
  },

  // WALLET RELATED PAGES
  {
    path: "/wallet",
    element: <WalletPage />,
  },

  // USER ACCOUNT RELATED PAGES
  {
    path: "/user-account",
    element: <UserAccountPage />,
  },
  {
    path: "/change-number",
    element: <ChangePhoneNumberPage />,
  },
  {
    path: "/help",
    element: <HelpAndSupportPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
