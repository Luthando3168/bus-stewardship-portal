
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeLetter = () => {
  const currentDate = new Date().toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout
      title="Welcome Letter | Luthando Maduna Chartered Accountants"
      description="Welcome to Luthando Maduna Chartered Accountants. We are excited to have you as our client."
    >
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-end gap-4 print:hidden">
              <Button
                onClick={handlePrint}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Printer className="h-4 w-4" />
                Print Letter
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                asChild
              >
                <Link to="/contact">
                  <FileText className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>

            <Card className="p-8 sm:p-10 md:p-12 shadow-lg print:shadow-none">
              {/* Letterhead */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-8 print:mb-12">
                <div className="flex flex-col">
                  <span className="font-montserrat font-bold text-xl md:text-2xl tracking-tight">
                    <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
                    <span className="text-navyblue ml-1"> Maduna</span>
                  </span>
                  <span className="font-montserrat text-xs text-navyblue tracking-wider mt-1">
                    CHARTERED ACCOUNTANTS
                  </span>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>28 Beacon Avenue, Linbro Park AH</p>
                  <p>Sandton, 2065</p>
                  <p>Tel: 062 019 3208</p>
                  <p>Email: info@madunacas.com</p>
                  <p>Professional Number: 20055210</p>
                </div>
              </div>

              {/* Date */}
              <div className="mb-8">
                <p className="text-right text-gray-600">{currentDate}</p>
              </div>

              {/* Greeting */}
              <div className="mb-6">
                <p className="font-semibold text-lg">Dear Valued Client,</p>
              </div>

              {/* Letter Content */}
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Welcome to Luthando Maduna Chartered Accountants!</span>
                </p>
                
                <p>
                  On behalf of our entire team, I would like to extend a warm welcome and sincere thanks for choosing 
                  our firm for your financial and business management needs. We are honored by your trust and confident 
                  that our partnership will be both productive and rewarding.
                </p>
                
                <p>
                  At Luthando Maduna Chartered Accountants, we are committed to providing exceptional service tailored 
                  to your specific requirements. Our team of dedicated professionals brings extensive expertise in accounting, 
                  business development, and financial advisory services to help you achieve your goals.
                </p>

                <p>
                  As your financial partner, we promise to:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>Deliver prompt and professional service at all times</li>
                  <li>Maintain clear and consistent communication</li>
                  <li>Provide strategic advice to help your business grow</li>
                  <li>Handle your financial matters with the utmost confidentiality and integrity</li>
                  <li>Stay current with regulatory changes that may affect your business</li>
                </ul>
                
                <p>
                  Your Client Manager will be in touch shortly to schedule an initial consultation where we can discuss 
                  your specific needs and objectives in greater detail. In the meantime, please feel free to contact us 
                  with any questions or concerns.
                </p>
                
                <p>
                  We look forward to a successful and long-lasting relationship.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-12">
                <p className="mb-1">Sincerely,</p>
                <div className="h-16 mb-2">
                  {/* Signature space */}
                </div>
                <p className="font-semibold">Luthando Maduna, CA(SA)</p>
                <p>Director</p>
                <p>Luthando Maduna Chartered Accountants (Pty) Ltd</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .container, .container * {
            visibility: visible;
          }
          .print\\:hidden {
            display: none;
          }
          header, footer {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

export default WelcomeLetter;
