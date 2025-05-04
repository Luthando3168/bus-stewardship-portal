
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { HeartPulse, Calendar, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    location: "MediCare Health Center, Sandton",
    availableTimes: ["9:00 AM", "11:30 AM", "2:15 PM", "4:45 PM"],
    price: "R850",
    rating: 4.9
  },
  {
    id: 2,
    name: "Dr. Michael Roberts",
    specialty: "Cardiologist",
    location: "Heart & Vascular Institute, Rosebank",
    availableTimes: ["8:30 AM", "10:00 AM", "1:30 PM"],
    price: "R1,450",
    rating: 4.8
  },
  {
    id: 3,
    name: "Dr. Emily Nkosi",
    specialty: "Dermatologist",
    location: "SkinCare Center, Sandton",
    availableTimes: ["9:15 AM", "12:30 PM", "3:00 PM"],
    price: "R1,200",
    rating: 4.7
  }
];

const services = [
  {
    id: 1,
    name: "Medical Aid Assistance",
    description: "Get help with your medical aid claims and benefits",
    categories: ["Administrative", "Financial"],
    turnaround: "24-48 hours"
  },
  {
    id: 2,
    name: "Specialist Referrals",
    description: "Fast-track appointments with specialists in our network",
    categories: ["Referrals", "Appointments"],
    turnaround: "Same day"
  },
  {
    id: 3,
    name: "Prescription Delivery",
    description: "Have your medications delivered directly to your door",
    categories: ["Delivery", "Medication"],
    turnaround: "Same day"
  },
  {
    id: 4,
    name: "Home Nursing",
    description: "Professional nursing care in the comfort of your home",
    categories: ["Home Care", "Nursing"],
    turnaround: "24 hours"
  }
];

const HealthcareService = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [description, setDescription] = useState("");

  const handleDoctorSelect = (doctorId: number) => {
    setSelectedDoctor(doctorId);
    setSelectedTime(null);
    toast.success("Doctor selected", {
      description: "You can now select an appointment time."
    });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
    toast.success("Service selected", {
      description: "You can now provide additional details for your request."
    });
  };

  const handleBookAppointment = () => {
    if (!appointmentDate) {
      toast.error("Please select an appointment date");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select an appointment time");
      return;
    }

    toast.success("Appointment booked successfully", {
      description: "A confirmation will be sent to your email shortly."
    });
  };

  const handleRequestService = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Service request submitted", {
      description: "Our healthcare team will contact you soon."
    });
    setDescription("");
  };

  const selectedDoctorData = selectedDoctor ? doctors.find(doctor => doctor.id === selectedDoctor) : null;

  return (
    <ServicePageTemplate
      title="Healthcare Services"
      description="Medical aid assistance, specialist referrals and healthcare advice"
      icon={HeartPulse}
      color="text-red-500"
    >
      <Tabs defaultValue="appointments" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="appointments">
            <Calendar className="h-4 w-4 mr-1" />
            Doctor Appointments
          </TabsTrigger>
          <TabsTrigger value="services">
            <HeartPulse className="h-4 w-4 mr-1" />
            Healthcare Services
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="appointments">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {doctors.map((doctor) => (
              <Card 
                key={doctor.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedDoctor === doctor.id ? 'ring-2 ring-red-500' : ''}`}
                onClick={() => handleDoctorSelect(doctor.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{doctor.name}</h3>
                    <Badge variant="outline" className="bg-red-50 text-red-500 border-red-100">
                      {doctor.rating} ★
                    </Badge>
                  </div>
                  
                  <p className="font-medium text-navyblue mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.location}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <Clock className="h-3.5 w-3.5 inline-block mr-1" />
                      {doctor.availableTimes.length} available times
                    </div>
                    <div className="font-bold text-navyblue">{doctor.price}</div>
                  </div>
                  
                  {selectedDoctor === doctor.id && (
                    <div className="mt-4 flex justify-end">
                      <Badge className="bg-red-500 text-white">
                        <Check className="h-3 w-3 mr-1" /> Selected
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedDoctor && (
            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">Book an appointment with {selectedDoctorData?.name}</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="appointmentDate">Appointment Date</Label>
                  <Input 
                    id="appointmentDate"
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="mb-4"
                    required
                  />
                  
                  <Label className="block mb-2">Available Times</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDoctorData?.availableTimes.map((time, index) => (
                      <Button
                        key={index}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={selectedTime === time ? "bg-red-500 hover:bg-red-600 text-white" : ""}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="reason" className="block mb-2">Reason for Visit</Label>
                  <Textarea 
                    id="reason"
                    placeholder="Please briefly describe your symptoms or reason for consultation"
                    rows={5}
                    className="resize-none mb-4"
                  />
                  
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    disabled={!selectedTime || !appointmentDate}
                    onClick={handleBookAppointment}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="services">
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedService === service.id ? 'ring-2 ring-red-500' : ''}`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.categories.map((category, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-red-50 text-red-500">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <Clock className="h-3.5 w-3.5 inline-block mr-1" />
                    Turnaround: {service.turnaround}
                  </div>
                  
                  {selectedService === service.id && (
                    <div className="mt-4 flex justify-end">
                      <Badge className="bg-red-500 text-white">
                        <Check className="h-3 w-3 mr-1" /> Selected
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedService && (
            <form onSubmit={handleRequestService} className="border-t pt-6">
              <h3 className="font-medium mb-4">Request this service</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="details" className="block mb-2">Service Details</Label>
                  <Textarea 
                    id="details"
                    placeholder="Please provide details about your request"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="resize-none mb-4"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2 flex justify-end">
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Submit Request
                  </Button>
                </div>
              </div>
            </form>
          )}
        </TabsContent>
      </Tabs>
    </ServicePageTemplate>
  );
};

export default HealthcareService;
