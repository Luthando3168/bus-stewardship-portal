
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

// Export the component routes array for use in App.tsx
export const userRoutes = [
  <Route key="user-dashboard" path="/user/dashboard" element={<UserDashboard />} />,
  <Route key="user-investments" path="/user/investments" element={<UserInvestments />} />,
  <Route key="user-my-investments" path="/user/my-investments" element={<UserMyInvestments />} />,
  <Route key="user-deals" path="/user/deals" element={<UserNewDeals />} />,
  <Route key="user-wallet" path="/user/wallet" element={<UserWallet />} />,
  <Route key="user-pending-deals" path="/user/pending-deals" element={<UserPendingDeals />} />,
  <Route key="user-statements" path="/user/statements" element={<UserStatements />} />,
  <Route key="user-profile" path="/user/profile" element={<UserProfile />} />,
  <Route key="user-concierge" path="/user/concierge" element={<UserConcierge />} />,
  <Route key="user-how-we-work" path="/user/how-we-work" element={<UserHowWeWork />} />,
  <Route key="user-beneficiaries" path="/user/beneficiaries" element={<UserBeneficiaries />} />,
  <Route key="user-loans" path="/user/loans" element={<UserLoans />} />,
  
  {/* Balwin Properties Routes */}
  <Route key="balwin-developments" path="/user/funds/property/balwin" element={<BalwinDevelopments />} />,
  <Route key="balwin-property-detail" path="/user/funds/property/balwin/:propertyId" element={<BalwinPropertyDetail />} />
];

// The UserRoutes component itself will still be available for older code
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
