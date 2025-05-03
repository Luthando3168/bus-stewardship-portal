
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ApproachCards: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-navyblue mb-6">Our Approach</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold text-navyblue mb-3">Community-Led</h4>
            <p>
              We believe in the power of community-led development. Our programs are designed 
              with direct input from community members to ensure they address real needs and 
              leverage local knowledge and capacity.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold text-navyblue mb-3">Sustainable Impact</h4>
            <p>
              We focus on creating sustainable solutions that will continue to benefit communities 
              long after our direct involvement ends. This means building local capacity, 
              establishing self-sustaining programs, and creating resilient systems.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold text-navyblue mb-3">Strategic Partnerships</h4>
            <p>
              We collaborate with other organizations—NGOs, government agencies, businesses, and 
              academic institutions—to leverage complementary strengths and maximize our collective 
              impact on communities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApproachCards;
