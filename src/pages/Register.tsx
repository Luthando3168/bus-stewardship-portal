
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import RegisterForm from "@/components/auth/registration/RegisterForm";
import Logo from "@/components/ui/Logo";
import { FileText, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
        <div className="w-full max-w-md">
          <Card className="border-gold shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <CardDescription className="text-gray-500 text-center">
                Business Ownership Registration Process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Required Documents:</h3>
                <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                  <li>Valid South African ID/Passport</li>
                  <li>Proof of Address (recent 3 months)</li>
                  <li>3 Months Bank Statements</li>
                  <li>Latest Payslip/Proof of Income</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 flex items-center gap-1 mb-2">
                    <CheckCircle size={16} className="text-emerald-600" /> Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-emerald-800">
                    <li className="flex items-start gap-1">
                      <span className="font-medium">• Access to exclusive services</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="font-medium">• Business ownership opportunities</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="font-medium">• Professional business network</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-start space-x-3 bg-amber-50 p-4 rounded-lg">
                  <FileText className="text-amber-600 mt-1" size={20} />
                  <div>
                    <p className="text-amber-900 text-sm">
                      After completing this initial registration, our team will guide you through 
                      the document submission process and account verification.
                    </p>
                  </div>
                </div>
              </div>
              
              <RegisterForm />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <span className="text-gray-500">Already registered?</span>{" "}
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
    </Layout>
  );
};

export default Register;
