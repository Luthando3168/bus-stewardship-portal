
import AdminLayout from "@/components/layout/AdminLayout";
import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  sendBulkNotifications, 
  NotificationRecipient,
  NotificationChannel
} from "@/utils/notificationService";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, MessageCircle } from "lucide-react";

// Mock client data for demonstration
const mockClients: NotificationRecipient[] = [
  { fullName: "John Doe", email: "john@example.com", phone: "+27123456789" },
  { fullName: "Jane Smith", email: "jane@example.com", phone: "+27987654321" },
  { fullName: "Robert Johnson", email: "robert@example.com", phone: "+27456789123" },
  { fullName: "Emily Wilson", email: "emily@example.com", phone: "+27112233445" },
  { fullName: "Michael Brown", email: "michael@example.com", phone: "+27556677889" },
];

// Mock recent notifications for history
const mockNotificationHistory = [
  { id: 1, type: "Welcome Email", recipients: 12, date: "2023-04-22", status: "Delivered" },
  { id: 2, type: "Deal Update", recipients: 24, date: "2023-04-20", status: "Delivered" },
  { id: 3, type: "New Opportunity", recipients: 56, date: "2023-04-18", status: "Delivered" },
  { id: 4, type: "Reminder", recipients: 34, date: "2023-04-15", status: "Partial Delivery" },
];

// Client groups
const clientGroups = [
  { value: "all", label: "All Clients" },
  { value: "property", label: "Property Fund Clients" },
  { value: "energy", label: "Energy Fund Clients" },
  { value: "agri", label: "Agriculture Fund Clients" },
  { value: "active", label: "Active Clients" },
  { value: "new", label: "New Clients (Last 30 Days)" },
];

const AdminNotifications = () => {
  const isMobile = useIsMobile();
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selectedChannels, setSelectedChannels] = useState<NotificationChannel[]>(["email"]);
  const [recipients, setRecipients] = useState<NotificationRecipient[]>([]);
  const [sendingStatus, setSendingStatus] = useState({ sending: false, progress: 0 });
  const [templateType, setTemplateType] = useState("custom");
  
  // Update recipients based on selected group
  useEffect(() => {
    // In a real app, this would fetch from the database based on the selected group
    setRecipients(mockClients);
  }, [selectedGroup]);
  
  const handleChannelToggle = (channel: NotificationChannel) => {
    setSelectedChannels(prev => {
      if (prev.includes(channel)) {
        return prev.filter(c => c !== channel);
      } else {
        return [...prev, channel];
      }
    });
  };
  
  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!emailSubject || !emailBody || selectedChannels.length === 0) {
      toast.error("Please fill in both subject and message body, and select at least one channel");
      return;
    }
    
    setSendingStatus({ sending: true, progress: 0 });
    
    try {
      // Create custom variables for the message
      const variables = {
        subject: emailSubject,
        message: emailBody,
      };
      
      // Send notifications through selected channels
      const result = await sendBulkNotifications(
        recipients,
        'custom' as any, // Using dynamic content instead of template
        selectedChannels,
        variables
      );
      
      if (result.success) {
        toast.success(`Notifications sent to ${result.successful} out of ${result.total} recipients`);
      } else {
        toast.error("Failed to send notifications");
      }
    } catch (error) {
      console.error("Notification error:", error);
      toast.error("Failed to send notifications");
    } finally {
      setSendingStatus({ sending: false, progress: 100 });
    }
  };
  
  const handleWhatsappSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!whatsappMessage) {
      toast.error("Please add a message");
      return;
    }
    
    setSendingStatus({ sending: true, progress: 0 });
    
    try {
      // Filter recipients who have phone numbers
      const validRecipients = recipients.filter(r => r.phone);
      
      if (validRecipients.length === 0) {
        toast.error("No recipients with phone numbers found");
        return;
      }
      
      // Create custom variables for the message
      const variables = {
        message: whatsappMessage,
      };
      
      // Send WhatsApp notifications
      const result = await sendBulkNotifications(
        validRecipients,
        'custom' as any, // Using dynamic content instead of template
        ['whatsapp'],
        variables
      );
      
      if (result.success) {
        toast.success(`WhatsApp messages sent to ${result.successful} out of ${result.total} recipients`);
      } else {
        toast.error("Failed to send WhatsApp messages");
      }
    } catch (error) {
      console.error("WhatsApp notification error:", error);
      toast.error("Failed to send WhatsApp messages");
    } finally {
      setSendingStatus({ sending: false, progress: 100 });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-navyblue">Send Notifications</h2>
        
        <Tabs defaultValue="email" className="w-full">
          <TabsList className={`grid w-full grid-cols-3 ${isMobile ? "text-sm" : ""}`}>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
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
                    <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select client group" />
                      </SelectTrigger>
                      <SelectContent>
                        {clientGroups.map((group) => (
                          <SelectItem key={group.value} value={group.value}>
                            {group.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      {recipients.length} recipients selected
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Notification Channels</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="channel-email" 
                          checked={selectedChannels.includes('email')}
                          onCheckedChange={() => handleChannelToggle('email')}
                        />
                        <Label htmlFor="channel-email" className="flex items-center gap-1">
                          <Mail size={16} /> Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="channel-whatsapp" 
                          checked={selectedChannels.includes('whatsapp')}
                          onCheckedChange={() => handleChannelToggle('whatsapp')}
                        />
                        <Label htmlFor="channel-whatsapp" className="flex items-center gap-1">
                          <MessageCircle size={16} /> WhatsApp
                        </Label>
                      </div>
                    </div>
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
                    <p className="text-xs text-muted-foreground">
                      You can use variables like {"{fullName}"} to personalize the message.
                    </p>
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
                      disabled={sendingStatus.sending}
                    >
                      {sendingStatus.sending ? "Sending..." : "Send Notification"}
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
                    <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select client group" />
                      </SelectTrigger>
                      <SelectContent>
                        {clientGroups.map((group) => (
                          <SelectItem key={group.value} value={group.value}>
                            {group.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      {recipients.filter(r => r.phone).length} recipients with phone numbers
                    </p>
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
                    <p className="text-xs text-muted-foreground">
                      You can use variables like {"{fullName}"} to personalize the message.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-gold hover:bg-lightgold text-white"
                      disabled={sendingStatus.sending}
                    >
                      {sendingStatus.sending ? "Sending..." : "Send WhatsApp"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader className={isMobile ? "p-3" : ""}>
                <CardTitle className={`${isMobile ? "text-lg" : ""}`}>Notification History</CardTitle>
              </CardHeader>
              <CardContent className={isMobile ? "p-3 pt-0" : ""}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockNotificationHistory.map((notification) => (
                      <TableRow key={notification.id}>
                        <TableCell>{notification.type}</TableCell>
                        <TableCell>{notification.recipients}</TableCell>
                        <TableCell>{notification.date}</TableCell>
                        <TableCell>
                          <span className={notification.status === "Delivered" ? "text-green-600" : "text-amber-600"}>
                            {notification.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminNotifications;
