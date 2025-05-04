
import React from 'react';
import { City } from '@/models/cities';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, Building, CheckCircle2, Clock } from "lucide-react";

interface CityDetailsProps {
  city: City;
  onRegisterClick: () => void;
  onJobsClick: () => void;
  onInvestClick: () => void;
  onBackClick: () => void;
}

const CityDetails: React.FC<CityDetailsProps> = ({ 
  city, 
  onRegisterClick, 
  onJobsClick,
  onInvestClick,
  onBackClick 
}) => {
  return (
    <div className="space-y-6">
      <Button variant="outline" size="sm" onClick={onBackClick} className="mb-4">
        Back to all cities
      </Button>
      
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={city.image} 
          alt={city.name}
          className="w-full h-48 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {city.id === 1 && (
              <Badge className="bg-gold text-navyblue">Flagship Project</Badge>
            )}
            <Badge className="bg-white/20">{city.province}</Badge>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{city.name}</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 rounded-b-lg bg-white">
              <h2 className="text-xl font-bold mb-4">About {city.name}</h2>
              <p className="mb-6">{city.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Province</h3>
                    <p>{city.province}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Target Population</h3>
                    <p>{city.population}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Jobs to be Created</h3>
                    <p>{city.jobs.reduce((total, sector) => total + sector.estimatedJobs, 0).toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Development Status</h3>
                    <div className="mt-1 space-y-1">
                      <Progress value={city.progress} className="h-2" />
                      <p className="text-sm">{city.progress}% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-blue-800 mb-2">Investment Opportunity</h3>
                <p className="text-blue-700 mb-2">{city.investmentRequired} total investment required</p>
                <p className="text-sm text-blue-600">
                  Investing in {city.name} contributes to sustainable urban development and economic growth 
                  while creating opportunities for previously disadvantaged communities.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="p-4 rounded-b-lg bg-white">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    +Job Creator Opportunities
                  </h2>
                  <p className="mb-4">
                    {city.name} will create approximately {city.jobs.reduce((total, sector) => total + sector.estimatedJobs, 0).toLocaleString()} jobs 
                    across various sectors. Register now to be considered for these positions before 
                    they are publicly advertised.
                  </p>
                </div>
                
                {city.jobs.map((sector) => (
                  <div key={sector.id} className="border rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2 flex items-center">
                      {sector.name}
                      <Badge className="ml-2 bg-blue-100 text-blue-800">
                        {sector.estimatedJobs} jobs
                      </Badge>
                    </h3>
                    <p className="mb-4">{sector.description}</p>
                    
                    <h4 className="font-medium mb-2">Key Roles:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sector.roles.map((role) => (
                        <div key={role.id} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between">
                            <h5 className="font-medium">{role.title}</h5>
                            <span className="text-sm text-green-700">{role.slots} positions</span>
                          </div>
                          <p className="text-sm text-gray-600 my-2">{role.description}</p>
                          <div className="text-sm">
                            <span className="font-medium">Requirements:</span>
                            <ul className="list-disc list-inside mt-1">
                              {role.requirements.map((req, index) => (
                                <li key={index} className="text-xs text-gray-600">{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center mt-8">
                  <Button onClick={onJobsClick} className="bg-navyblue">
                    Apply for +Job Creator Program
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="p-4 rounded-b-lg bg-white">
              <h2 className="text-xl font-bold mb-4">City Amenities</h2>
              <p className="mb-6">
                {city.name} is designed to be a complete, sustainable urban environment with 
                all the amenities residents need for a high quality of life.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {city.amenities.map((amenity, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p>{amenity}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-navyblue text-white p-6 rounded-lg flex flex-col h-fit">
          <h3 className="text-xl font-bold mb-4">Get Involved</h3>
          <p className="mb-8">
            Join the {city.name} development and be part of building 
            inclusive cities where everyone can share in the wealth.
          </p>
          
          <div className="space-y-4 mt-auto">
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
              Apply for Jobs
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
    </div>
  );
};

export default CityDetails;
