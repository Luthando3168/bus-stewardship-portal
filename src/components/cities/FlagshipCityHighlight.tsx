
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, ArrowRight, HandHeart } from "lucide-react";
import { City } from '@/models/cities';
import { Progress } from "@/components/ui/progress";

interface FlagshipCityHighlightProps {
  city: City;
  onRegisterClick: () => void;
  onJobsClick: () => void;
  onInvestClick: () => void;
}

const FlagshipCityHighlight: React.FC<FlagshipCityHighlightProps> = ({ 
  city, 
  onRegisterClick, 
  onJobsClick,
  onInvestClick 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <img 
            src={city.image} 
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-gold text-navyblue">Flagship Project</Badge>
              <Badge className="bg-white/20">{city.province}</Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{city.name}</h2>
          </div>
        </div>
      </div>

      <div className="bg-navyblue text-white rounded-lg p-6 flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">#ChangeAlexNow</h3>
          <p className="text-white/80">Our flagship project transforming Alexandra township into a modern, sustainable city with opportunities for all.</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gold" />
            <span>Target: {city.population} residents</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-gold" />
            <span>{city.jobs.reduce((total, sector) => total + sector.estimatedJobs, 0).toLocaleString()} jobs to be created</span>
          </div>
          <div className="flex items-center gap-2">
            <HandHeart className="h-5 w-5 text-gold" />
            <span>{city.investmentRequired} investment needed</span>
          </div>
        </div>
        
        <div className="space-y-1 mb-6">
          <div className="flex justify-between">
            <span>Development Progress</span>
            <span className="font-medium">{city.progress}%</span>
          </div>
          <Progress value={city.progress} className="h-2 bg-white/20" indicatorClassName="bg-gold" />
        </div>
        
        <div className="mt-auto space-y-3">
          <Button 
            onClick={onRegisterClick} 
            className="w-full bg-gold text-navyblue hover:bg-gold/90"
          >
            Register Your Family
          </Button>
          <Button 
            onClick={onJobsClick} 
            className="w-full bg-white/10 hover:bg-white/20"
          >
            Explore Job Opportunities
          </Button>
          <Button 
            onClick={onInvestClick} 
            className="w-full bg-white/10 hover:bg-white/20"
          >
            Invest in This City
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlagshipCityHighlight;
