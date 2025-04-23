
import React from 'react';
import Layout from "@/components/layout/Layout";
import WelcomeEmailPreview from "@/components/email/WelcomeEmailPreview";

const EmailPreview = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Welcome Email Preview</h1>
        <WelcomeEmailPreview />
      </div>
    </Layout>
  );
};

export default EmailPreview;
