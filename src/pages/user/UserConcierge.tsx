
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Clock, Star, Building, ShoppingCart, AlertCircle } from "lucide-react";
import ServiceCard from "@/components/user/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { conciergeServices } from "@/data/concierge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

const UserConcierge = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { user } = useAuthState();

  // Filter services based on active tab
  const filteredServices = conciergeServices.filter(service => {
    if (activeTab === "all") return true;
    if (activeTab === "favorites") return service.isFavorite;
    if (activeTab === "recent") return service.recentlyUsed;
    if (activeTab === "owned") return service.ownershipNote;
    return true;
  });

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navyblue mb-1">Concierge Services</h1>
            <p className="text-gray-600 text-sm">
              Exclusive services and conveniences for MCA members.
            </p>
          </div>
          <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20 py-1.5 px-3 self-start">
            <Star className="h-3.5 w-3.5 mr-1 text-gold" />
            {user ? "Premium Member Access" : "Preview Access"}
          </Badge>
        </div>

        {!user && (
          <Alert className="bg-blue-50 border-blue-200">
            <ShoppingCart className="h-4 w-4 text-blue-500" />
            <AlertTitle className="text-blue-800">Purchase Disclaimer</AlertTitle>
            <AlertDescription className="text-blue-700">
              You can browse and purchase products from our concierge services as a guest. 
              Payments are processed directly by our partners and are not held in escrow by MCA Direct. 
              <Link to="/register" className="ml-1 font-medium text-blue-900 underline">Register for an account</Link> for a more personalized experience and to track your orders.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all" className="text-sm">
              All Services
            </TabsTrigger>
            <TabsTrigger value="favorites" className="text-sm">
              <Heart className="h-3.5 w-3.5 mr-1" />
              My Favorites
            </TabsTrigger>
            <TabsTrigger value="recent" className="text-sm">
              <Clock className="h-3.5 w-3.5 mr-1" />
              Recently Used
            </TabsTrigger>
            <TabsTrigger value="owned" className="text-sm">
              <Building className="h-3.5 w-3.5 mr-1" />
              My Investments
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                  bgColor={service.bgColor}
                  link={service.link}
                  ownershipNote={service.ownershipNote}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserConcierge;
