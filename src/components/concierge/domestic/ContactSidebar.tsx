
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare } from "lucide-react";

interface ContactSidebarProps {
  provider: any;
}

const ContactSidebar = ({ provider }: ContactSidebarProps) => {
  const navigate = useNavigate();
  const { serviceType } = useParams<{ serviceType: string }>();
  
  const handleBackClick = () => {
    // Navigate back to the service providers list for this service type
    if (serviceType) {
      navigate(`/concierge/domestic/${serviceType}`);
    } else {
      // Fallback to domestic main page if service type is not available
      navigate('/concierge/domestic');
    }
  };
  
  return (
    <div>
      <Card>
        <CardHeader className="bg-lime-50">
          <CardTitle className="text-lg">Contact {provider.name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder={`Ask ${provider.name.split(' ')[0]} a question...`}
                rows={4}
                className="mt-1"
              />
            </div>
            
            <Button className="w-full flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-medium mb-2">Quick Questions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageSquare className="h-3 w-3 mr-2" />
                Are you available next Monday?
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageSquare className="h-3 w-3 mr-2" />
                What supplies do you bring?
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageSquare className="h-3 w-3 mr-2" />
                Do you have any references?
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleBackClick}
        >
          Back to Provider List
        </Button>
      </div>
    </div>
  );
};

export default ContactSidebar;
