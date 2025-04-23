
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";

const ConsultationBookingDialog = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [topic, setTopic] = useState("");

  const handleScheduleConsultation = () => {
    if (!date || !time || !clientName || !clientEmail || !topic) {
      toast.error("Please fill in all required fields");
      return;
    }

    // This would be replaced with actual Google Calendar integration
    const eventDetails = {
      date: date,
      time: time,
      clientName: clientName,
      clientEmail: clientEmail,
      clientPhone: clientPhone,
      topic: topic
    };

    console.log("Scheduling consultation:", eventDetails);
    toast.success("Consultation scheduled successfully! A calendar invite will be sent to your email.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gold hover:bg-lightgold">
          <CalendarIcon className="h-4 w-4 mr-2" />
          Book Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] font-montserrat">
        <DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <DialogTitle className="text-2xl font-bold tracking-tight">Schedule a Consultation</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Book a consultation with our experts. You'll receive a Google Calendar invite with Google Meet link.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="date" className="font-semibold">Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time" className="font-semibold">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="font-medium"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="clientName" className="font-semibold">Your Name *</Label>
            <Input
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter your name"
              className="font-medium"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="clientEmail" className="font-semibold">Email Address *</Label>
            <Input
              id="clientEmail"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="Enter your email"
              className="font-medium"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="clientPhone" className="font-semibold">Phone Number</Label>
            <Input
              id="clientPhone"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="font-medium"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="topic" className="font-semibold">Consultation Topic *</Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="What would you like to discuss?"
              className="font-medium"
              required
            />
          </div>
        </div>
        <Button onClick={handleScheduleConsultation} className="w-full bg-gold hover:bg-lightgold">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Schedule Consultation
        </Button>
        <p className="text-sm text-muted-foreground text-center mt-2 font-medium">
          You will receive an email with the Google Calendar invitation and Google Meet link
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationBookingDialog;
