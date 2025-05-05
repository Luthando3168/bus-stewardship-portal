
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Building, Gift, Car, Wine, Coffee, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ConciergeDashboard = () => {
  const services = [
    {
      title: "Property",
      icon: <Building className="h-8 w-8 text-navyblue" />,
      description: "Exclusive property listings",
      link: "/concierge/property"
    },
    {
      title: "Business Services",
      icon: <Users className="h-8 w-8 text-navyblue" />,
      description: "Expert business consultations",
      link: "/concierge/business"
    },
    {
      title: "Wine Club",
      icon: <Wine className="h-8 w-8 text-navyblue" />,
      description: "Premium wine selections",
      link: "/concierge/wine"
    },
    {
      title: "Gift Service",
      icon: <Gift className="h-8 w-8 text-navyblue" />,
      description: "Curated gift options",
      link: "/concierge/gifts"
    },
    {
      title: "Domestic Services",
      icon: <Heart className="h-8 w-8 text-navyblue" />,
      description: "Trusted home service providers",
      link: "/concierge/domestic"
    },
    {
      title: "Restaurants",
      icon: <Coffee className="h-8 w-8 text-navyblue" />,
      description: "Premium dining experiences",
      link: "/concierge/restaurants"
    },
    {
      title: "Auto Services",
      icon: <Car className="h-8 w-8 text-navyblue" />,
      description: "Automotive services and repairs",
      link: "/concierge/auto"
    },
    {
      title: "Grocery Delivery",
      icon: <ShoppingBag className="h-8 w-8 text-navyblue" />,
      description: "Premium grocery delivery",
      link: "/concierge/grocery"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-navyblue mb-6">Concierge Services</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your personal concierge dashboard. Browse our premium services designed to enhance your lifestyle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <Card className="p-6 h-full transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navyblue mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-navyblue mb-4">Upcoming Appointments</h2>
          <Card className="p-6">
            <div className="flex items-center justify-center p-8 text-gray-500">
              <Calendar className="h-12 w-12 mr-4 text-navyblue opacity-60" />
              <p>You have no scheduled appointments</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ConciergeDashboard;
