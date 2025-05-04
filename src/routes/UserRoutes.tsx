
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "@/pages/user/UserDashboard";
import UserInvestments from "@/pages/user/UserInvestments";
import UserNewDeals from "@/pages/user/UserNewDeals";
import UserWallet from "@/pages/user/UserWallet";
import UserPendingDeals from "@/pages/user/UserPendingDeals";
import UserStatements from "@/pages/user/UserStatements";
import UserProfile from "@/pages/user/UserProfile";
import UserConcierge from "@/pages/user/UserConcierge";
import UserHowWeWork from "@/pages/user/UserHowWeWork";
import UserBeneficiaries from "@/pages/user/UserBeneficiaries";
import UserLoans from "@/pages/user/UserLoans";
import UserMyInvestments from "@/pages/user/UserMyInvestments";
import BalwinDevelopments from "@/pages/funds/property/BalwinDevelopments";
import BalwinPropertyDetail from "@/pages/funds/property/BalwinPropertyDetail";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<UserDashboard />} />
      <Route path="investments" element={<UserInvestments />} />
      <Route path="my-investments" element={<UserMyInvestments />} />
      <Route path="deals" element={<UserNewDeals />} />
      <Route path="wallet" element={<UserWallet />} />
      <Route path="pending-deals" element={<UserPendingDeals />} />
      <Route path="statements" element={<UserStatements />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="concierge" element={<UserConcierge />} />
      <Route path="how-we-work" element={<UserHowWeWork />} />
      <Route path="beneficiaries" element={<UserBeneficiaries />} />
      <Route path="loans" element={<UserLoans />} />
      
      {/* Balwin Properties Routes */}
      <Route path="funds/property/balwin" element={<BalwinDevelopments />} />
      <Route path="funds/property/balwin/:propertyId" element={<BalwinPropertyDetail />} />
    </Routes>
  );
};

export default UserRoutes;
