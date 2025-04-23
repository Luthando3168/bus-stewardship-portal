import React from 'react';
import Layout from "@/components/layout/Layout";
import WelcomeEmailPreview from "@/components/email/WelcomeEmailPreview";
import ClientEmailPreview from "@/components/email/ClientEmailPreview";
import { RegistrationConfirmEmail } from "@/components/email/RegistrationConfirmEmail";
import { ShareCertificateEmail } from "@/components/email/ShareCertificateEmail";
import { DealApprovalEmail } from "@/components/email/DealApprovalEmail";
import { RegistrationApprovedEmail } from "@/components/email/RegistrationApprovedEmail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EmailPreview = () => {
  const demoProps = {
    fullName: "John Doe",
    dealName: "MyHealth Fund Investment",
    investmentAmount: "25,000",
    certificateNumber: "MCA2024001",
    confirmationLink: "#",
    approvalLink: "#",
    viewLink: "#",
    email: "john.doe@example.com",
    clientNumber: "MCA2024005",
    bankAccountNumber: "1234567890",
    bankAccountBranch: "Universal Branch 250"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Email Templates Preview</h1>
        
        <div className="relative">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Welcome Email</h2>
                  <WelcomeEmailPreview />
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Registration Confirmation</h2>
                  <div className="bg-white rounded-lg shadow-lg">
                    <RegistrationConfirmEmail
                      fullName={demoProps.fullName}
                      confirmationLink={demoProps.confirmationLink}
                    />
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Registration Approved</h2>
                  <div className="bg-white rounded-lg shadow-lg">
                    <RegistrationApprovedEmail
                      fullName={demoProps.fullName}
                      clientNumber={demoProps.clientNumber}
                      bankAccountNumber={demoProps.bankAccountNumber}
                      bankAccountBranch={demoProps.bankAccountBranch}
                    />
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Deal Approval</h2>
                  <div className="bg-white rounded-lg shadow-lg">
                    <DealApprovalEmail
                      fullName={demoProps.fullName}
                      dealName={demoProps.dealName}
                      investmentAmount={demoProps.investmentAmount}
                      approvalLink={demoProps.approvalLink}
                    />
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Share Certificate</h2>
                  <div className="bg-white rounded-lg shadow-lg">
                    <ShareCertificateEmail
                      fullName={demoProps.fullName}
                      dealName={demoProps.dealName}
                      certificateNumber={demoProps.certificateNumber}
                      viewLink={demoProps.viewLink}
                    />
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-4">Client Update</h2>
                  <ClientEmailPreview />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default EmailPreview;
