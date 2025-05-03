
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const PreFooter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Investment Opportunities Card */}
          <Card className="shadow-md border-t-4 border-t-gold hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navyblue mb-3">Impact Investment</h3>
              <p className="text-gray-600 mb-4">
                Join our business ownership program and invest in established businesses across South Africa starting from just R500 monthly.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/impact-funds" className="flex items-center">
                  View Impact Funds
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Business Services Card */}
          <Card className="shadow-md border-t-4 border-t-navyblue hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navyblue mb-3">Business Services</h3>
              <p className="text-gray-600 mb-4">
                Professional accounting, tax services, and corporate finance solutions for businesses of all sizes.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Foundation Card */}
          <Card className="shadow-md border-t-4 border-t-gold hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navyblue mb-3">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Learn about how the Luthando Maduna Foundation is making a difference in communities across South Africa.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/foundation" className="flex items-center">
                  Foundation Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-navyblue mb-4">Ready to grow with LMCA?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Whether you're looking to invest or need professional accounting services, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-gold hover:bg-gold/90 text-white">
              <Link to="/register">Start Investing Today</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
