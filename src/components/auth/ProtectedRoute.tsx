
import { ReactNode } from "react";
import { useRoleCheck } from "@/hooks/useRoleCheck";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { isAdmin, loading: roleLoading } = useRoleCheck();
  
  // Only block access for admin routes, allow access to all user routes without authentication
  if (requireAdmin && !isAdmin && !roleLoading) {
    // For admin pages, we'll display a message instead of redirecting
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
