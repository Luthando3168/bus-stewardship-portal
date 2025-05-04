
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { ClipboardCheck, Filter, CircleCheck, Clock, AlertCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { serviceProviders } from "@/data/concierge/domestic/serviceProviders";
import { serviceRequests, ServiceRequest, RequestStatus } from "@/data/concierge/domestic/serviceRequests";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DomesticServiceRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ServiceRequest[]>(serviceRequests);
  const [activeTab, setActiveTab] = useState<RequestStatus | 'all'>('all');
  const [ratingDialog, setRatingDialog] = useState<{ open: boolean; request: ServiceRequest | null }>({
    open: false,
    request: null
  });
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [disputeDialog, setDisputeDialog] = useState<{ open: boolean; request: ServiceRequest | null }>({
    open: false,
    request: null
  });
  const [disputeReason, setDisputeReason] = useState<string>("");
  const [disputeDescription, setDisputeDescription] = useState<string>("");
  
  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'pending': return "text-amber-600 bg-amber-50";
      case 'accepted': return "text-blue-600 bg-blue-50";
      case 'completed': return "text-green-600 bg-green-50";
      case 'cancelled': return "text-gray-600 bg-gray-50";
      case 'dispute': return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };
  
  const getStatusIcon = (status: RequestStatus) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'accepted': return <CircleCheck className="h-4 w-4" />;
      case 'completed': return <CircleCheck className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      case 'dispute': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };
  
  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'awaiting_payment': return <Badge variant="outline" className="bg-amber-50 text-amber-600">Awaiting Payment</Badge>;
      case 'in_escrow': return <Badge variant="outline" className="bg-blue-50 text-blue-600">In Escrow</Badge>;
      case 'released': return <Badge variant="outline" className="bg-green-50 text-green-600">Released</Badge>;
      case 'refunded': return <Badge variant="outline" className="bg-gray-50 text-gray-600">Refunded</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  // Filter requests based on active tab
  const filteredRequests = activeTab === 'all' 
    ? requests 
    : requests.filter(req => req.status === activeTab);

  const handleRatingSubmit = () => {
    if (!ratingDialog.request) return;
    
    // In a real app, this would update the database
    toast.success("Rating submitted", {
      description: "Thank you for your feedback."
    });
    
    setRatingDialog({ open: false, request: null });
    setRating(5);
    setComment("");
  };

  const handleDisputeSubmit = () => {
    if (!disputeDialog.request) return;
    
    // In a real app, this would update the database
    toast.success("Dispute submitted", {
      description: "Your dispute has been submitted and is under review."
    });
    
    setDisputeDialog({ open: false, request: null });
    setDisputeReason("");
    setDisputeDescription("");
  };
  
  const handleReleasePayment = (requestId: string) => {
    // In a real app, this would update the payment status in the database
    toast.success("Payment released", {
      description: "The payment has been released to the service provider."
    });
  };
  
  return (
    <ServicePageTemplate
      title="Service Requests"
      description="Manage and track your domestic service requests"
      icon={ClipboardCheck}
      color="text-lime-600"
    >
      <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as RequestStatus | 'all')}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="dispute">Disputes</TabsTrigger>
          </TabsList>
          
          <Button 
            className="bg-lime-600 hover:bg-lime-700 text-white"
            onClick={() => navigate('/concierge/domestic')}
          >
            New Request
          </Button>
        </div>
        
        <TabsContent value={activeTab} className="mt-0">
          {filteredRequests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No service requests found.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => navigate('/concierge/domestic')}
              >
                Browse Services
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredRequests.map((request) => {
                // Find the provider details
                const provider = serviceProviders.find(p => p.id === request.providerId);
                if (!provider) return null;
                
                return (
                  <Card key={request.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={provider.image} alt={provider.name} />
                            <AvatarFallback className="bg-lime-600 text-white">
                              {provider.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h3 className="font-medium">{provider.name}</h3>
                            <p className="text-sm text-gray-500">{provider.role}</p>
                          </div>
                        </div>
                        
                        <Badge className={getStatusColor(request.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(request.status)}
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Service</h4>
                            <p>{request.service.charAt(0).toUpperCase() + request.service.slice(1)}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Date</h4>
                            <p>{request.serviceDate}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                            <p>{request.duration} hours</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500">Description</h4>
                          <p className="text-sm">{request.description}</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Payment</h4>
                            <div className="flex items-center justify-between mt-1">
                              <p className="font-medium">R{request.payment.amount}</p>
                              {getPaymentStatusBadge(request.payment.status)}
                            </div>
                          </div>
                          
                          {request.status === 'dispute' && request.dispute && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Dispute Status</h4>
                              <Badge className="mt-1">
                                {request.dispute.status.replace('_', ' ').charAt(0).toUpperCase() + 
                                  request.dispute.status.replace('_', ' ').slice(1)}
                              </Badge>
                            </div>
                          )}
                          
                          {request.status === 'completed' && request.providerRating && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Your Rating</h4>
                              <div className="flex items-center mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < request.providerRating!.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-wrap gap-2 justify-end">
                      {request.status === 'pending' && (
                        <Button variant="outline" size="sm" onClick={() => {
                          toast.info("Request cancelled", {
                            description: "Your request has been cancelled."
                          });
                        }}>
                          Cancel Request
                        </Button>
                      )}
                      
                      {request.status === 'accepted' && (
                        <Button variant="outline" size="sm" className="text-blue-700" onClick={() => {
                          toast.info("Message sent", {
                            description: "Your message has been sent to the provider."
                          });
                        }}>
                          Contact Provider
                        </Button>
                      )}
                      
                      {request.status === 'completed' && !request.providerRating && (
                        <Button 
                          size="sm" 
                          className="bg-amber-500 hover:bg-amber-600 text-white"
                          onClick={() => setRatingDialog({ open: true, request })}
                        >
                          Rate Provider
                        </Button>
                      )}
                      
                      {request.status === 'completed' && request.payment.status === 'in_escrow' && (
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleReleasePayment(request.id)}
                        >
                          Release Payment
                        </Button>
                      )}
                      
                      {(request.status === 'completed' || request.status === 'accepted') && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-red-600"
                          onClick={() => setDisputeDialog({ open: true, request })}
                        >
                          Report Issue
                        </Button>
                      )}
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => navigate(`/concierge/domestic/${request.service}/provider/${request.providerId}`)}
                      >
                        View Provider
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Rating Dialog */}
      <Dialog open={ratingDialog.open} onOpenChange={(open) => setRatingDialog({ ...ratingDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rate your experience</DialogTitle>
            <DialogDescription>
              Please rate your experience with this service provider.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 cursor-pointer ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comment">Comments</Label>
              <Textarea
                id="comment"
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="ghost" onClick={() => setRatingDialog({ open: false, request: null })}>
              Cancel
            </Button>
            <Button onClick={handleRatingSubmit}>Submit Rating</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Dispute Dialog */}
      <Dialog open={disputeDialog.open} onOpenChange={(open) => setDisputeDialog({ ...disputeDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report an Issue</DialogTitle>
            <DialogDescription>
              If you experienced a problem with this service, please provide details below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reason">Reason</Label>
              <Select value={disputeReason} onValueChange={setDisputeReason}>
                <SelectTrigger id="reason">
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="service_quality">Service Quality</SelectItem>
                  <SelectItem value="provider_behavior">Provider Behavior</SelectItem>
                  <SelectItem value="missed_appointment">Missed Appointment</SelectItem>
                  <SelectItem value="damage">Damage to Property</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail..."
                value={disputeDescription}
                onChange={(e) => setDisputeDescription(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDisputeDialog({ open: false, request: null })}>
              Cancel
            </Button>
            <Button onClick={handleDisputeSubmit} className="bg-red-600 hover:bg-red-700 text-white">
              Submit Dispute
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ServicePageTemplate>
  );
};

// Star component for ratings
const Star = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default DomesticServiceRequests;
