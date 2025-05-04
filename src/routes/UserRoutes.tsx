
import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserDashboard from "@/pages/user/UserDashboard";
import UserInvestments from "@/pages/user/UserInvestments";
import UserWallet from "@/pages/user/UserWallet";
import UserProfile from "@/pages/user/UserProfile";
import UserHowWeWork from "@/pages/user/UserHowWeWork";
import UserLoans from "@/pages/user/UserLoans";

// Lazy loaded components
const UserConcierge = lazy(() => import("@/pages/user/UserConcierge"));
const GroceryService = lazy(() => import("@/pages/concierge/GroceryService"));

const UserRoutes = () => {
  return (
    <>
      {/* User routes */}
      <Route 
        path="/user/dashboard" 
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/investments" 
        element={
          <ProtectedRoute>
            <UserInvestments />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/wallet" 
        element={
          <ProtectedRoute>
            <UserWallet />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/profile" 
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/how-we-work" 
        element={
          <ProtectedRoute>
            <UserHowWeWork />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/loans" 
        element={
          <ProtectedRoute>
            <UserLoans />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/concierge" 
        element={
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <UserConcierge />
            </Suspense>
          </ProtectedRoute>
        } 
      />
      
      {/* Concierge service subpages */}
      <Route 
        path="/concierge/grocery" 
        element={
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <GroceryService />
            </Suspense>
          </ProtectedRoute>
        } 
      />
      
      {/* Additional user routes */}
      <Route 
        path="/user/beneficiaries" 
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/statements" 
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } 
      />
    </>
  );
};

export default UserRoutes;
