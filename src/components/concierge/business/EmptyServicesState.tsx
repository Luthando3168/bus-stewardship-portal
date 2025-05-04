
import React from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

interface EmptyServicesStateProps {
  onViewAll?: () => void;
}

const EmptyServicesState = ({ onViewAll }: EmptyServicesStateProps) => {
  const navigate = useNavigate();
  const { user } = useAuthState();

  const handleRegister = () => {
    navigate('/register');
  };
  
  return (
    <div className="text-center py-12 border rounded-lg bg-gray-50">
      <div className="text-gray-400 mb-4">
        <Briefcase className="mx-auto h-12 w-12" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No services found</h3>
      <p className="text-gray-500 mb-4">Try adjusting your search query or browse all categories</p>
      
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        {onViewAll && (
          <Button 
            variant="outline" 
            className="border-navyblue text-navyblue"
            onClick={onViewAll}
          >
            View All Services
          </Button>
        )}
        
        {!user && (
          <Button 
            className="bg-gold hover:bg-gold/90 text-navyblue font-semibold"
            onClick={handleRegister}
          >
            Register for Full Access
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyServicesState;
