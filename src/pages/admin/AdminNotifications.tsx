
import AdminLayout from "@/components/layout/AdminLayout";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminNotifications = () => {
  const isMobile = useIsMobile();
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");
  
  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailSubject || !emailBody) {
      toast.error("Please fill in both subject and message body");
      return;
    }
    
    // In a real app, this would send to a backend
    toast.success("Email notification prepared for sending");
    // For demo purposes, we'll just log it
    console.log("Email notification:", { emailSubject, emailBody });
  };
  
  const handleWhatsappSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!whatsappMessage) {
      toast.error("Please add a message");
      return;
    }
    
    // In a real app, this would send to a backend
    toast.success("WhatsApp notification prepared for sending");
    // For demo purposes, we'll just log it
    console.log("WhatsApp notification:", { whatsappMessage });
  };

  return (
    <AdminLayout>
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-navyblue">Send Notifications</h2>
        
        <Tabs defaultValue="email" className="w-full">
          <TabsList className={`grid w-full grid-cols-2 ${isMobile ? "text-sm" : ""}`}>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          </TabsList>
          
          <TabsContent value="email">
            <Card>
              <CardHeader className={isMobile ? "p-3" : ""}>
                <CardTitle className={`${isMobile ? "text-lg" : ""}`}>Send Email to Clients</CardTitle>
              </CardHeader>
              <CardContent className={isMobile ? "p-3 pt-0" : ""}>
                <form onSubmit={handleEmailSubmit} className="space-y-3 md:space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipients">Recipients</Label>
                    <select 
                      id="recipients" 
                      className="flex h-9 md:h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="all">All Clients</option>
                      <option value="property">Property Fund Clients</option>
                      <option value="energy">Energy Fund Clients</option>
                      <option value="agri">Agriculture Fund Clients</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Email subject" 
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="h-9 md:h-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Compose your message here..." 
                      className="min-h-[150px] md:min-h-[200px]"
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="attachment">Attachment (Optional)</Label>
                    <Input 
                      id="attachment" 
                      type="file" 
                      className="h-9 md:h-10"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-gold hover:bg-lightgold text-white"
                    >
                      Send Email
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="whatsapp">
            <Card>
              <CardHeader className={isMobile ? "p-3" : ""}>
                <CardTitle className={`${isMobile ? "text-lg" : ""}`}>Send WhatsApp to Clients</CardTitle>
              </CardHeader>
              <CardContent className={isMobile ? "p-3 pt-0" : ""}>
                <form onSubmit={handleWhatsappSubmit} className="space-y-3 md:space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="wa-recipients">Recipients</Label>
                    <select 
                      id="wa-recipients" 
                      className="flex h-9 md:h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="all">All Clients</option>
                      <option value="property">Property Fund Clients</option>
                      <option value="energy">Energy Fund Clients</option>
                      <option value="agri">Agriculture Fund Clients</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="wa-message">Message</Label>
                    <Textarea 
                      id="wa-message" 
                      placeholder="Compose your WhatsApp message here..." 
                      className="min-h-[150px] md:min-h-[200px]"
                      value={whatsappMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-gold hover:bg-lightgold text-white"
                    >
                      Send WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminNotifications;
