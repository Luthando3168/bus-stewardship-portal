
import React from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, MapPin } from "lucide-react";
import { balwinProperties } from "@/data/property/balwin-properties";

const BalwinDevelopments = () => {
  const navigate = useNavigate();

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back to Property Fund
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navyblue mb-2">Balwin Properties Developments</h1>
          <p className="text-gray-600">
            Exclusive investment opportunities in premium Balwin residential developments across South Africa.
            Each property provides a minimum investment starting at R2,000 with projected returns between 13-15% p.a.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {balwinProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-navyblue mb-1">{property.name}</h2>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span>{property.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{property.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Projected Return</p>
                    <p className="font-semibold text-emerald-600">{property.returnRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Min Investment</p>
                    <p className="font-semibold">R {property.minInvestment.toLocaleString()}</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-navyblue hover:bg-blue-800"
                  onClick={() => navigate(`/funds/property/balwin/${property.id}`)}
                >
                  View Development
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default BalwinDevelopments;
