import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserDashboard from "@/pages/user/UserDashboard";
import UserInvestments from "@/pages/user/UserInvestments";
import UserWallet from "@/pages/user/UserWallet";
import UserProfile from "@/pages/user/UserProfile";
import UserHowWeWork from "@/pages/user/UserHowWeWork";
import UserLoans from "@/pages/user/UserLoans";
import UserConcierge from "@/pages/user/UserConcierge";

// Export routes as an array of JSX elements
export const userRoutes = [
  // User routes
  <Route 
    key="user-dashboard" 
    path="/user/dashboard" 
    element={
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-investments" 
    path="/user/investments" 
    element={
      <ProtectedRoute>
        <UserInvestments />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-wallet" 
    path="/user/wallet" 
    element={
      <ProtectedRoute>
        <UserWallet />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-profile" 
    path="/user/profile" 
    element={
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-how-we-work" 
    path="/user/how-we-work" 
    element={
      <ProtectedRoute>
        <UserHowWeWork />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-loans" 
    path="/user/loans" 
    element={
      <ProtectedRoute>
        <UserLoans />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-concierge" 
    path="/user/concierge" 
    element={
      <ProtectedRoute>
        <UserConcierge />
      </ProtectedRoute>
    } 
  />,
  
  // Additional user routes
  <Route 
    key="user-beneficiaries" 
    path="/user/beneficiaries" 
    element={
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-statements" 
    path="/user/statements" 
    element={
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    } 
  />
];

// Keep the component for backwards compatibility
const UserRoutes = () => <>{userRoutes}</>;
export default UserRoutes;
