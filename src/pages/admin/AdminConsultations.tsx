import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Video, Calendar } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const mockConsultations = [
  {
    id: 1,
    userName: "John Dube",
    email: "john.d@example.com",
    phone: "073 123 4567",
    date: "2024-04-25",
    time: "10:00",
    topic: "Investment Planning",
    status: "Scheduled",
    notes: "First-time client, interested in property investments"
  },
  {
    id: 2,
    userName: "Sarah Nkosi",
    email: "sarah.n@example.com",
    phone: "082 987 6543",
    date: "2024-04-26",
    time: "14:30",
    topic: "Portfolio Review",
    status: "Completed",
    notes: "Annual review of investment portfolio"
  },
  {
    id: 3,
    userName: "Thabo Moloi",
    email: "thabo.m@example.com",
    phone: "061 555 1234",
    date: "2024-04-28",
    time: "09:15",
    topic: "Tax Planning",
    status: "Scheduled",
    notes: "Tax consultation for small business owner"
  },
];

const AdminConsultations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  const filteredConsultations = mockConsultations.filter(
    (consultation) =>
      consultation.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingConsultations = filteredConsultations.filter(
    (consultation) => consultation.status === "Scheduled"
  );

  const completedConsultations = filteredConsultations.filter(
    (consultation) => consultation.status === "Completed"
  );

  const handleMarkCompleted = (id: number) => {
    toast.success("Consultation marked as completed");
  };

  const handleCancelConsultation = (id: number) => {
    toast.success("Consultation cancelled successfully");
  };

  const handleScheduleConsultation = () => {
    if (!date || !time || !clientName || !clientEmail || !topic) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Consultation scheduled successfully! A Google Calendar invite will be sent.");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">Client Consultations</h2>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gold hover:bg-lightgold flex gap-2">
                <Plus className="h-4 w-4" />
                <span>Schedule Consultation</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Schedule New Consultation</DialogTitle>
                <DialogDescription>
                  Schedule a consultation with Google Calendar integration.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter client name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="clientEmail">Client Email</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Enter client email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="clientPhone">Client Phone</Label>
                  <Input
                    id="clientPhone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Enter client phone"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter consultation topic"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Input
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any additional notes"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button onClick={handleScheduleConsultation} className="bg-gold hover:bg-lightgold">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule with Google Calendar
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  A Google Meet link will be automatically generated and included in the calendar invite
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search consultations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>

        <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Consultations</CardTitle>
                <CardDescription>
                  View and manage scheduled client consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Topic</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingConsultations.map((consultation) => (
                        <TableRow key={consultation.id}>
                          <TableCell>{consultation.userName}</TableCell>
                          <TableCell>
                            <div>{consultation.email}</div>
                            <div className="text-sm text-muted-foreground">{consultation.phone}</div>
                          </TableCell>
                          <TableCell>
                            <div>{consultation.date}</div>
                            <div className="text-sm text-muted-foreground">{consultation.time}</div>
                          </TableCell>
                          <TableCell>{consultation.topic}</TableCell>
                          <TableCell>
                            <div className="max-w-xs truncate">{consultation.notes}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col space-y-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleMarkCompleted(consultation.id)}
                              >
                                Mark Completed
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleCancelConsultation(consultation.id)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {upcomingConsultations.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No upcoming consultations found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Completed Consultations</CardTitle>
                <CardDescription>
                  View history of completed client consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Topic</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {completedConsultations.map((consultation) => (
                        <TableRow key={consultation.id}>
                          <TableCell>{consultation.userName}</TableCell>
                          <TableCell>
                            <div>{consultation.email}</div>
                            <div className="text-sm text-muted-foreground">{consultation.phone}</div>
                          </TableCell>
                          <TableCell>
                            <div>{consultation.date}</div>
                            <div className="text-sm text-muted-foreground">{consultation.time}</div>
                          </TableCell>
                          <TableCell>{consultation.topic}</TableCell>
                          <TableCell>
                            <div className="max-w-xs truncate">{consultation.notes}</div>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">View Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {completedConsultations.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No completed consultations found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminConsultations;
