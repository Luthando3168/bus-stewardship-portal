
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
}

interface ProfessionalCardProps {
  professional: Professional;
}

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16 border-2 border-gray-100">
            <AvatarImage src={professional.image} alt={professional.name} />
            <AvatarFallback className="bg-navyblue text-white">
              {professional.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-1">{professional.name}</h4>
            <p className="text-gray-600 text-sm mb-2">{professional.title}</p>
            
            <div className="flex items-center gap-1 text-sm mb-3">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span>{professional.rating}</span>
              <span className="text-gray-500">({professional.reviewCount} reviews)</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {professional.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50 text-navyblue border-blue-200">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1 text-navyblue" />
                {professional.availability}
              </div>
              
              <Link to={`/concierge/business/professional/${professional.id}`}>
                <Button size="sm" className="bg-navyblue hover:bg-blue-900">
                  View Profile <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;
