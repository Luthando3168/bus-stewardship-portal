
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

export interface Professional {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  experience: string;
  availability: string;
  image?: string;
  serviceCategory: string;
  regions?: string[];
}

interface ProfessionalCardProps {
  professional: Professional;
}

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <Link to={`/concierge/business/professional/${professional.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border">
              <AvatarImage src={professional.image} alt={professional.name} />
              <AvatarFallback className="bg-navyblue text-white">
                {professional.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <div>
                <h4 className="font-bold">{professional.name}</h4>
                <p className="text-gray-600 text-sm">{professional.title}</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="ml-1 font-medium text-sm">{professional.rating}</span>
                </div>
                <span className="text-gray-500 text-xs ml-1">({professional.reviewCount} reviews)</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-xs">{professional.experience}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex flex-wrap gap-1 mb-3">
              {professional.specialties.map((specialty, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-blue-50 text-navyblue border-blue-200 text-xs"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
            
            {professional.regions && professional.regions.length > 0 && (
              <div className="flex items-center text-gray-500 text-xs mt-3">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{professional.regions.slice(0, 2).join(", ")}
                {professional.regions.length > 2 && ", +"+(professional.regions.length-2)}</span>
              </div>
            )}
            
            <div className="mt-3 text-sm text-green-600 font-medium">
              {professional.availability}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProfessionalCard;
