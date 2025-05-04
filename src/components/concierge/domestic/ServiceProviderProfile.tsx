
import React from "react";
import { Star, Clock, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ServiceProvider } from "@/data/concierge/domestic/serviceProviders";
import { Button } from "@/components/ui/button";

interface ServiceProviderProfileProps {
  provider: ServiceProvider;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ServiceProviderProfile = ({ 
  provider, 
  isSelected, 
  onSelect 
}: ServiceProviderProfileProps) => {
  const initials = provider.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? 'ring-2 ring-lime-600' : ''}`}
      onClick={() => onSelect(provider.id)}
    >
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          <Avatar className="h-20 w-20 border-2 border-gray-200">
            <AvatarImage src={provider.image} alt={provider.name} />
            <AvatarFallback className="text-lg bg-lime-600 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{provider.name}</h3>
                <p className="text-gray-600">{provider.role}</p>
              </div>
              {isSelected && (
                <Badge className="bg-lime-600 text-white">
                  <CheckCircle className="h-3 w-3 mr-1" /> Selected
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-amber-500 mr-1" />
                {provider.rating} ({provider.reviews} reviews)
              </span>
              <span className="flex items-center">
                <Award className="h-4 w-4 text-navyblue mr-1" />
                {provider.experience} years exp.
              </span>
              <span className="font-medium text-lime-700">{provider.hourlyRate}/hr</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600 text-sm">{provider.bio}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {provider.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-5">
            <span className="text-sm flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Available: {provider.availability}
            </span>
            
            <Button 
              size="sm" 
              className={`${isSelected ? 'bg-gray-300 hover:bg-gray-400' : 'bg-lime-600 hover:bg-lime-700'} text-white`}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(provider.id);
              }}
            >
              {isSelected ? 'Selected' : 'Select Provider'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceProviderProfile;
