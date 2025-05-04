import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminDashboard from "@/pages/admin/AdminDashboard";

// Export routes as an array of JSX elements
export const adminRoutes = [
  // Admin routes
  <Route 
    key="admin-dashboard"
    path="/admin/dashboard" 
    element={
      <ProtectedRoute requireAdmin={true}>
        <AdminDashboard />
      </ProtectedRoute>
    } 
  />
];

// Keep the component for backwards compatibility
const AdminRoutes = () => <>{adminRoutes}</>;
export default AdminRoutes;
