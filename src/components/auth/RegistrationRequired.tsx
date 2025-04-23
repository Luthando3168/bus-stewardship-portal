
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RegistrationRequired = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-lightgray">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-navyblue mb-4">Complete Registration Required</h2>
        <p className="text-gray-600 mb-6">
          To access investment features, please complete your registration first.
        </p>
        <Button 
          onClick={() => navigate('/complete-registration')} 
          className="bg-gold text-white hover:bg-gold/90"
        >
          Complete Registration
        </Button>
      </div>
    </div>
  );
};

export default RegistrationRequired;
