
import React from "react";
import { Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import PublicRoutes from "./PublicRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <UserRoutes />
      <AdminRoutes />
      
      {/* 404 catch-all */}
      <Route path="*" element={<NotFound />} />
    </>
  );
};

export default AppRoutes;
