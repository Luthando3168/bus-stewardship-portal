
import { ReactNode } from "react";
import { useRoleCheck } from "@/hooks/useRoleCheck";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireAuth?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  requireAdmin = false,
  requireAuth = false 
}: ProtectedRouteProps) => {
  const { isAdmin, loading: roleLoading } = useRoleCheck();
  
  // Block access for admin routes if user is not admin
  if (requireAdmin && !isAdmin && !roleLoading) {
    // For admin pages, display a message instead of redirecting
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
        <div className="text-white text-lg bg-red-600 p-6 rounded-lg">
          Admin access required. This page is restricted.
        </div>
      </div>
    );
  }

  // Allow access to all user pages without authentication
  return <>{children}</>;
};

export default ProtectedRoute;
