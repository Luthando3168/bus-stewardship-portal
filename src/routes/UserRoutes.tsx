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
  // User routes - now available to all users but with limited functionality for guests
  <Route 
    key="user-dashboard" 
    path="/user/dashboard" 
    element={<UserDashboard />} 
  />,
  <Route 
    key="user-investments" 
    path="/user/investments" 
    element={<UserInvestments />} 
  />,
  <Route 
    key="user-concierge" 
    path="/user/concierge" 
    element={<UserConcierge />} 
  />,
  
  // Routes that still require authentication
  <Route 
    key="user-wallet" 
    path="/user/wallet" 
    element={
      <ProtectedRoute requireAuth={true}>
        <UserWallet />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-profile" 
    path="/user/profile" 
    element={
      <ProtectedRoute requireAuth={true}>
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
      <ProtectedRoute requireAuth={true}>
        <UserLoans />
      </ProtectedRoute>
    } 
  />,
  
  // Additional user routes
  <Route 
    key="user-beneficiaries" 
    path="/user/beneficiaries" 
    element={
      <ProtectedRoute requireAuth={true}>
        <UserDashboard />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="user-statements" 
    path="/user/statements" 
    element={
      <ProtectedRoute requireAuth={true}>
        <UserDashboard />
      </ProtectedRoute>
    } 
  />
];

// Keep the component for backwards compatibility
const UserRoutes = () => <>{userRoutes}</>;
export default UserRoutes;
