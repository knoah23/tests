import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
  PrivacyPolicy,
  SplashScreen,
  TermsAndConditions,
  UploadImagePage,
  UserAccountPage,
  WalletPage,
  WelcomePage,
  WorkmanshipFeePage,
} from "./pages/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        {/* ONBOARDING PAGES */}

        <Route path='/splash' element={<SplashScreen />} />
        <Route path='/phone-number' element={<PhoneNumberPage />} />
        <Route path='/OTP' element={<OTPPage />} />
        <Route path='/name' element={<FullNamePage />} />
        <Route path='/fund-wallet' element={<FundWalletPage />} />
        <Route path='/T&Cs' element={<TermsAndConditions />} />
        <Route path='/location' element={<LocationPage />} />
        <Route path='/manual-location' element={<ManualLocationPage />} />
        <Route path='/upload-image' element={<UploadImagePage />} />
        <Route path='/welcome' element={<WelcomePage />} />

        {/* BOOKING PAGES */}

        <Route path='/post' element={<PostRequestPage />} />
        <Route path='/fee' element={<WorkmanshipFeePage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/services' element={<AllServices />} />
        <Route path='/created-jobs' element={<CreatedJobs />} />
        <Route path='/job-detail' element={<JobDetail />} />
        <Route path='/aritisian-profile' element={<ArtisianProfile />} />
        <Route path='/images' element={<AllImages />} />

        {/* INBOX RELATED PAGES */}

        <Route path='/inbox' element={<InboxPage />} />
        <Route path='/inbox-details' element={<InboxDetailsPage />} />

        {/* HISTORY RELATED PAGES */}

        <Route path='/history' element={<HistoryPage />} />
        <Route path='/history-details' element={<HistoryDetailsPage />} />

        {/* WALLET RELATED PAGES */}

        <Route path='/wallet' element={<WalletPage />} />

        {/* USER ACCOUNT RELATED PAGES */}

        <Route path='/user-account' element={<UserAccountPage />} />
        <Route path='/change-number' element={<ChangePhoneNumberPage />} />
        <Route path='/help' element={<HelpAndSupportPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
