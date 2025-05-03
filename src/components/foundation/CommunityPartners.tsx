
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, MapPin, Landmark, HandHeart } from "lucide-react";

const CommunityPartners: React.FC = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-navyblue mb-6">Working With Communities</h3>
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png" 
                  alt="Community Engagement" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-navyblue">Our Community Partners</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Parents of Learners:</span> Supporting education and creating sustainable school businesses</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Taxi Commuters:</span> Transforming transport hubs into economic centers</p>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Social Security Beneficiaries:</span> Creating business ownership opportunities for greater financial security</p>
                </div>
                <div className="flex items-start gap-3">
                  <HandHeart className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Soccer Fans:</span> Leveraging the passion for sports to build community businesses</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityPartners;
