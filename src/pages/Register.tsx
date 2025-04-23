
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import RegisterForm from "@/components/auth/registration/RegisterForm";
import Logo from "@/components/ui/Logo";
import { Info } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
      <div className="w-full max-w-md">
        <Card className="border-gold shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardDescription className="text-gray-500 text-center">
              Client Registration Process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 flex items-start space-x-3">
              <Info className="text-blue-700 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-blue-900 font-medium mb-2">
                  Client Onboarding Information
                </p>
                <p className="text-blue-700 text-sm">
                  To become a client, please complete our initial registration process. 
                  We'll guide you through the necessary steps to access our services.
                </p>
              </div>
            </div>
            <RegisterForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <a 
                href="/login" 
                className="text-gold hover:text-lightgold underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Sign In
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;

