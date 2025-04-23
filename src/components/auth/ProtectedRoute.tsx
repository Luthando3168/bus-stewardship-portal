
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useRoleCheck } from "@/hooks/useRoleCheck";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading, error } = useRoleCheck();
  
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If there's an error checking the role but we have a user,
  // allow access but don't enforce admin requirement
  if (error) {
    console.warn("Error checking role, proceeding with limited permissions:", error);
    
    // If admin is required but we can't verify, redirect to dashboard
    if (requireAdmin) {
      return <Navigate to="/user/dashboard" replace />;
    }
    
    return <>{children}</>;
  }

  // Normal role checking when no errors
  if (requireAdmin && !isAdmin && !roleLoading) {
    return <Navigate to="/user/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
