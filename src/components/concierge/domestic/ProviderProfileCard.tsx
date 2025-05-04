
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, DollarSign } from "lucide-react";

interface ProviderProfileCardProps {
  provider: any;
  onBookClick: () => void;
}

const ProviderProfileCard = ({ provider, onBookClick }: ProviderProfileCardProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="h-32 w-32 border-2 border-gray-200">
          <AvatarImage src={provider.image} alt={provider.name} />
          <AvatarFallback className="text-3xl bg-lime-600 text-white">
            {provider.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-4 flex-1">
          <div>
            <h3 className="text-xl font-semibold">{provider.name}</h3>
            <p className="text-gray-600">{provider.role}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-navyblue" />
              <span>{provider.experience} years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span>{provider.rating} rating ({provider.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-600" />
              <span>Available: {provider.availability}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-lime-700" />
              <span>{provider.hourlyRate}/hour</span>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600">{provider.bio}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {provider.skills.map((skill: string, i: number) => (
              <Badge key={i} variant="outline" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Service Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">Completed Jobs</h4>
            <p className="text-lg font-medium">{provider.completedJobs || 0}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">Response Rate</h4>
            <p className="text-lg font-medium">{provider.responseRate || 0}%</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">Service Area</h4>
            <p>Greater Johannesburg Area</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">Languages</h4>
            <p>English, Zulu, Xhosa</p>
          </div>
        </CardContent>
      </Card>
                   
      <div className="flex justify-end">
        <Button 
          onClick={onBookClick}
          className="bg-lime-600 hover:bg-lime-700 text-white"
        >
          Book This Provider
        </Button>
      </div>
    </div>
  );
};

export default ProviderProfileCard;
