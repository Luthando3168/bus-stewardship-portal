
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cities, getProvincesList, getTotalJobCount, City } from "@/models/cities";
import { Input } from "@/components/ui/input";
import { Search, Building, MapPin, Users } from "lucide-react";
import CityCard from "@/components/cities/CityCard";
import FlagshipCityHighlight from "@/components/cities/FlagshipCityHighlight";
import CityDetails from "@/components/cities/CityDetails";
import FamilyRegistrationForm from "@/components/cities/FamilyRegistrationForm";
import JobCreatorForm from "@/components/cities/JobCreatorForm";
import InvestmentForm from "@/components/cities/InvestmentForm";
import { toast } from "sonner";

enum ViewMode {
  CityList,
  CityDetail,
  FamilyRegistration,
  JobCreator,
  Investment
}

const CitiesProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.CityList);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  
  const flagshipCity = cities.find(city => city.id === 1);
  const provincesList = getProvincesList();
  const totalJobCount = getTotalJobCount();

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         city.province.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = !selectedProvince || city.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  const handleCitySelect = (cityId: number) => {
    const city = cities.find(c => c.id === cityId);
    if (city) {
      setSelectedCity(city);
      setViewMode(ViewMode.CityDetail);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRegisterClick = (city?: City) => {
    if (city) {
      setSelectedCity(city);
    }
    setViewMode(ViewMode.FamilyRegistration);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJobsClick = (city?: City) => {
    if (city) {
      setSelectedCity(city);
    }
    setViewMode(ViewMode.JobCreator);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInvestClick = (city?: City) => {
    if (city) {
      setSelectedCity(city);
    }
    setViewMode(ViewMode.Investment);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setViewMode(ViewMode.CityList);
    setSelectedCity(null);
  };

  const handleFamilyRegister = (data: any) => {
    console.log("Family registration data:", data);
    toast.success("Family registration submitted successfully!");
    setViewMode(ViewMode.CityList);
  };

  const handleJobApplication = (data: any) => {
    console.log("Job application data:", data);
    toast.success("Job application submitted successfully!");
    setViewMode(ViewMode.CityList);
  };

  const handleInvestment = (data: any) => {
    console.log("Investment data:", data);
    toast.success("Investment interest submitted successfully!");
    setViewMode(ViewMode.CityList);
  };

  const renderView = () => {
    switch (viewMode) {
      case ViewMode.CityDetail:
        if (!selectedCity) return null;
        return (
          <CityDetails 
            city={selectedCity} 
            onRegisterClick={() => handleRegisterClick(selectedCity)} 
            onJobsClick={() => handleJobsClick(selectedCity)} 
            onInvestClick={() => handleInvestClick(selectedCity)}
            onBackClick={handleBackToList}
          />
        );
        
      case ViewMode.FamilyRegistration:
        return (
          <FamilyRegistrationForm 
            onRegistrationSubmit={handleFamilyRegister}
            onCancel={handleBackToList}
          />
        );
        
      case ViewMode.JobCreator:
        return (
          <JobCreatorForm 
            city={selectedCity || undefined}
            onJobApplicationSubmit={handleJobApplication}
            onCancel={handleBackToList}
          />
        );
        
      case ViewMode.Investment:
        return (
          <InvestmentForm 
            city={selectedCity || undefined}
            onInvestmentSubmit={handleInvestment}
            onCancel={handleBackToList}
          />
        );
        
      default: // ViewMode.CityList
        return (
          <>
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-navyblue mb-4">100 Cities Project</h1>
              <p className="text-lg mb-8">
                Our vision is to transform urban development across South Africa, creating inclusive 
                cities where previously disadvantaged communities own the businesses that supply 
                their daily needs. Starting with 20 cities across all nine provinces, we're building 
                sustainable urban centers with the #ChangeAlexNow as our flagship project.
              </p>
              
              {flagshipCity && (
                <FlagshipCityHighlight 
                  city={flagshipCity}
                  onRegisterClick={() => handleRegisterClick(flagshipCity)}
                  onJobsClick={() => handleJobsClick(flagshipCity)}
                  onInvestClick={() => handleInvestClick(flagshipCity)}
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">20 Cities</h3>
                    <p className="text-gray-600">Across 9 provinces</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-green-100 text-green-700 p-3 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{totalJobCount.toLocaleString()}</h3>
                    <p className="text-gray-600">Jobs to be created</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-amber-100 text-amber-700 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Inclusive Cities</h3>
                    <p className="text-gray-600">Economic empowerment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navyblue mb-6">Explore Cities</h2>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search cities..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select
                    value={selectedProvince || ""}
                    onValueChange={(value) => setSelectedProvince(value || null)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All provinces" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All provinces</SelectItem>
                      {provincesList.map(province => (
                        <SelectItem key={province.name} value={province.name}>
                          {province.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCities.map((city) => (
                    <CityCard key={city.id} city={city} onSelect={handleCitySelect} />
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-gray-500">No cities match your filters.</p>
                </div>
              )}
            </div>
          </>
        );
    }
  };

  return (
    <Layout title="100 Cities Project | LMCA">
      <div className="py-8 md:py-12 container mx-auto px-4 sm:px-6 lg:px-8">
        {renderView()}
      </div>
    </Layout>
  );
};

export default CitiesProject;
