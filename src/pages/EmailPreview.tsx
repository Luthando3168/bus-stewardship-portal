
import React from 'react';
import Layout from "@/components/layout/Layout";
import WelcomeEmailPreview from "@/components/email/WelcomeEmailPreview";
import ClientEmailPreview from "@/components/email/ClientEmailPreview";
import { RegistrationConfirmEmail } from "@/components/email/RegistrationConfirmEmail";
import { ShareCertificateEmail } from "@/components/email/ShareCertificateEmail";
import { DealApprovalEmail } from "@/components/email/DealApprovalEmail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmailPreview = () => {
  const demoProps = {
    fullName: "John Doe",
    dealName: "MyHealth Fund Investment",
    investmentAmount: "25,000",
    certificateNumber: "MCA2024001",
    confirmationLink: "#",
    approvalLink: "#",
    viewLink: "#",
    email: "john.doe@example.com"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Email Templates Preview</h1>
        
        <Tabs defaultValue="welcome" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="welcome">Welcome Email</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="deal-approval">Deal Approval</TabsTrigger>
            <TabsTrigger value="share-certificate">Share Certificate</TabsTrigger>
            <TabsTrigger value="client">Client Update</TabsTrigger>
          </TabsList>
          
          <TabsContent value="welcome">
            <WelcomeEmailPreview />
          </TabsContent>
          
          <TabsContent value="registration">
            <div className="bg-white rounded-lg shadow-lg">
              <RegistrationConfirmEmail
                fullName={demoProps.fullName}
                confirmationLink={demoProps.confirmationLink}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="deal-approval">
            <div className="bg-white rounded-lg shadow-lg">
              <DealApprovalEmail
                fullName={demoProps.fullName}
                dealName={demoProps.dealName}
                investmentAmount={demoProps.investmentAmount}
                approvalLink={demoProps.approvalLink}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="share-certificate">
            <div className="bg-white rounded-lg shadow-lg">
              <ShareCertificateEmail
                fullName={demoProps.fullName}
                dealName={demoProps.dealName}
                certificateNumber={demoProps.certificateNumber}
                viewLink={demoProps.viewLink}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="client">
            <ClientEmailPreview />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default EmailPreview;
