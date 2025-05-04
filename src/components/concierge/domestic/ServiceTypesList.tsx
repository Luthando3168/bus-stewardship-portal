
import React from "react";
import ServiceTypeCard from "./ServiceTypeCard";

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  rates: string;
}

interface ServiceTypesListProps {
  serviceTypes: ServiceType[];
  onSelect: (serviceId: string) => void;
}

const ServiceTypesList = ({ serviceTypes, onSelect }: ServiceTypesListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {serviceTypes.map((service) => (
        <ServiceTypeCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          rates={service.rates}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ServiceTypesList;
