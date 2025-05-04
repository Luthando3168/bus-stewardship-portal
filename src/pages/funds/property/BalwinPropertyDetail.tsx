
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Building2, Check, Info } from "lucide-react";
import { balwinProperties } from "@/data/property/balwin-properties";
import PropertyUnitCard from "@/components/funds/property/PropertyUnitCard";
import InvestmentModal from "@/components/funds/property/InvestmentModal";

const BalwinPropertyDetail = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState(balwinProperties.find(p => p.id === propertyId));
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [investmentModalOpen, setInvestmentModalOpen] = useState(false);

  useEffect(() => {
    if (!property) {
      navigate('/funds/property/balwin');
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  const handleUnitSelect = (unitId: string) => {
    setSelectedUnit(unitId);
    setInvestmentModalOpen(true);
  };

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/funds/property/balwin')}
        >
          <ArrowLeft size={16} />
          Back to Developments
        </Button>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl mb-6">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-64 object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold text-navyblue mb-2">{property.name}</h1>
            <p className="text-gray-500 mb-6">{property.location}</p>
            <p className="text-gray-700 mb-8">{property.description}</p>

            <Tabs defaultValue="about" className="mb-8">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Development Overview</h3>
                <p className="text-gray-700 mb-4">
                  {property.name} is a premium Balwin development located in {property.location}. The development 
                  offers modern apartments with high-quality finishes and exceptional amenities.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm text-gray-500">Price Range</h4>
                    <p className="font-semibold">{property.priceRange}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Projected Return</h4>
                    <p className="font-semibold text-emerald-600">{property.returnRate}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Property Features</h3>
                <ul className="space-y-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-emerald-500 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="amenities" className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Development Amenities</h3>
                <ul className="space-y-2">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-emerald-500 mr-2 mt-1" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <div>
              <h2 className="text-xl font-bold text-navyblue mb-4">Available Investment Units</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {property.availableUnits.map((unit) => (
                  <PropertyUnitCard 
                    key={unit.id}
                    unit={unit}
                    onSelect={() => handleUnitSelect(unit.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Min Investment</p>
                    <p className="font-bold text-lg">R {property.minInvestment.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projected Returns</p>
                    <p className="font-bold text-lg text-emerald-600">{property.returnRate}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 flex items-center mb-2">
                    <Info size={14} className="mr-1" />
                    Co-ownership model with fractional investments
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mb-6">
                    <Info size={14} className="mr-1" />
                    Professional property management included
                  </p>
                  
                  <Button 
                    className="w-full bg-navyblue hover:bg-blue-800 mb-3"
                    onClick={() => setInvestmentModalOpen(true)}
                  >
                    Invest Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open("https://www.balwin.co.za", "_blank")}
                  >
                    Visit Balwin Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {investmentModalOpen && (
          <InvestmentModal 
            open={investmentModalOpen}
            onOpenChange={setInvestmentModalOpen}
            property={property}
            selectedUnitId={selectedUnit}
            minInvestment={property.minInvestment}
          />
        )}
      </div>
    </UserLayout>
  );
};

export default BalwinPropertyDetail;
