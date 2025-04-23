
import React from 'react';
import Layout from "@/components/layout/Layout";
import WelcomeEmailPreview from "@/components/email/WelcomeEmailPreview";
import ClientEmailPreview from "@/components/email/ClientEmailPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmailPreview = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Email Templates Preview</h1>
        
        <Tabs defaultValue="welcome" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="welcome">Welcome Email</TabsTrigger>
            <TabsTrigger value="client">Client Update Email</TabsTrigger>
          </TabsList>
          
          <TabsContent value="welcome">
            <WelcomeEmailPreview />
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
