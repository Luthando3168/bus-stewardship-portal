
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Users, Info } from "lucide-react";
import { City } from '@/models/cities';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Progress } from "@/components/ui/progress";

interface CityCardProps {
  city: City;
  onSelect: (cityId: number) => void;
}

const CityCard: React.FC<CityCardProps> = ({ city, onSelect }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={city.image} 
            alt={city.name}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        <Badge className="absolute top-2 right-2 bg-navyblue">
          {city.province}
        </Badge>
      </div>
      <CardContent className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{city.name}</h3>
          <Badge variant={city.id === 1 ? "default" : "outline"} className={city.id === 1 ? "bg-gold text-navyblue" : ""}>
            {city.id === 1 ? "Flagship" : "Planned"}
          </Badge>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-600" />
            <span>{city.province}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            <span>Target: {city.population} residents</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-green-600" />
            <span>{city.jobs.reduce((total, sector) => total + sector.estimatedJobs, 0).toLocaleString()} jobs projected</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{city.progress}%</span>
          </div>
          <Progress value={city.progress} className="h-2" />
        </div>
        
        <Button 
          onClick={() => onSelect(city.id)} 
          className="w-full bg-navyblue hover:bg-navyblue/90"
        >
          <Info className="mr-2 h-4 w-4" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CityCard;
