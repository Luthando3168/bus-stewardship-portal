
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { LucideIcon } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  ownershipNote?: string | null;
  children: React.ReactNode;
}

const ServicePageTemplate = ({
  title,
  description,
  icon: Icon,
  color,
  ownershipNote,
  children
}: ServicePageTemplateProps) => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/user/concierge">
            <Button variant="ghost" size="sm" className="text-navyblue">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Concierge
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navyblue mb-1">
              <Icon className={`h-6 w-6 inline-block mr-2 ${color}`} />
              {title}
            </h1>
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>
          {ownershipNote && (
            <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20 py-1.5 px-3 self-start">
              {ownershipNote}
            </Badge>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          {children}
        </div>
      </div>
    </UserLayout>
  );
};

export default ServicePageTemplate;
