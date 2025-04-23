
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NotificationType, templates } from "@/utils/notificationService";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { FileText, Save } from "lucide-react";

const templateTypes: { label: string; value: NotificationType }[] = [
  { label: "Welcome Email", value: "welcome" },
  { label: "Profile Update", value: "profile_update" },
  { label: "Deal Approved", value: "deal_approved" },
  { label: "Deal Pending", value: "deal_pending" },
  { label: "Deal Completed", value: "deal_completed" },
  { label: "New Opportunity", value: "new_opportunity" },
  { label: "Document Uploaded", value: "document_uploaded" },
  { label: "Password Reset", value: "password_reset" },
];

const CommunicationTemplates = () => {
  const [selectedType, setSelectedType] = useState<NotificationType>("welcome");
  const [subject, setSubject] = useState(templates[selectedType].subject);
  const [emailBody, setEmailBody] = useState(templates[selectedType].body);
  const [whatsappBody, setWhatsappBody] = useState(templates[selectedType].whatsappBody || "");

  // Preview the template with the logo and formatting
  const previewEmail = () => {
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(emailBody);
    }
  };

  // Handle template type change
  const handleTemplateChange = (type: NotificationType) => {
    setSelectedType(type);
    setSubject(templates[type].subject);
    setEmailBody(templates[type].body);
    setWhatsappBody(templates[type].whatsappBody || "");
  };

  // Simulate saving templates (in a real app, this would update the database)
  const handleSave = () => {
    templates[selectedType] = {
      subject,
      body: emailBody,
      whatsappBody
    };
    toast.success("Template saved successfully");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Communication Templates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Template Type</Label>
            <Select value={selectedType} onValueChange={(value) => handleTemplateChange(value as NotificationType)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select template type" />
              </SelectTrigger>
              <SelectContent>
                {templateTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email Template</TabsTrigger>
              <TabsTrigger value="whatsapp">WhatsApp Template</TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2">
                <Label>Subject</Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Email subject"
                />
              </div>
              <div className="space-y-2">
                <Label>Email Body (HTML)</Label>
                <Textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="min-h-[400px] font-mono text-sm"
                  placeholder="Email body (HTML supported)"
                />
              </div>
              <Button variant="outline" onClick={previewEmail}>
                Preview Email
              </Button>
            </TabsContent>

            <TabsContent value="whatsapp" className="space-y-4">
              <div className="space-y-2">
                <Label>WhatsApp Message</Label>
                <Textarea
                  value={whatsappBody}
                  onChange={(e) => setWhatsappBody(e.target.value)}
                  className="min-h-[200px]"
                  placeholder="WhatsApp message template"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2">
            <Button 
              onClick={handleSave}
              className="bg-gold hover:bg-lightgold text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Template
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-2">Available Variables:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{"{fullName}"} - Recipient's full name</li>
              <li>{"{dealName}"} - Name of the investment deal</li>
              <li>{"{amount}"} - Investment amount</li>
              <li>{"{date}"} - Transaction date</li>
              <li>{"{certificateNumber}"} - Share certificate number</li>
              <li>{"{investmentType}"} - Type of investment</li>
              <li>{"{returns}"} - Expected returns</li>
              <li>{"{minimumAmount}"} - Minimum investment amount</li>
              <li>{"{documentName}"} - Name of uploaded document</li>
              <li>{"{resetLink}"} - Password reset link</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunicationTemplates;
