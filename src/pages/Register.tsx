
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import RegisterForm from "@/components/auth/registration/RegisterForm";
import Logo from "@/components/ui/Logo";

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
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-blue-700 text-sm">
                Welcome to our client onboarding process. To access our website and services:
              </p>
              <ul className="list-disc list-inside text-blue-700 text-sm mt-2 space-y-1">
                <li>Complete this initial registration form</li>
                <li>You will receive an email with further instructions</li>
                <li>Follow the email link to complete your full client registration</li>
                <li>Our team will review and approve your registration</li>
              </ul>
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
