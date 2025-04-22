
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ImpactFunds = () => {
  const investmentProcess = [
    {
      step: "Deal Sourcing",
      description: "We identify potential investment opportunities through our network, industry research, and direct outreach."
    },
    {
      step: "Initial Screening",
      description: "Each opportunity undergoes a preliminary assessment to evaluate alignment with our impact criteria and financial objectives."
    },
    {
      step: "Due Diligence",
      description: "We conduct comprehensive financial, legal, operational, and impact analyses of promising opportunities."
    },
    {
      step: "Investment Committee Review",
      description: "Our experienced committee evaluates the opportunity against stringent criteria for both financial returns and impact potential."
    },
    {
      step: "Deal Structuring",
      description: "We structure the investment to protect investor interests while supporting the success of the portfolio company or project."
    },
    {
      step: "Investment Monitoring",
      description: "We actively monitor performance, provide support, and implement strategic interventions as needed."
    },
    {
      step: "Impact Measurement",
      description: "We track and report on both financial returns and social/environmental impact outcomes."
    },
    {
      step: "Exit Strategy",
      description: "We plan for responsible exits that preserve the impact mission while delivering financial returns to investors."
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Sankofa Capital Partners Impact Funds"
            subtitle="Investment vehicles driving positive social and environmental impact while generating competitive returns"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-charcoal space-y-6 mb-12">
              <p className="text-lg">
                Through our investment management arm, Sankofa Capital Partners, we operate specialized impact funds that 
                channel capital into businesses and projects that address critical social and environmental challenges while 
                generating attractive financial returns for investors.
              </p>
              <p>
                Our funds serve as investment vehicles that connect LMCA clients with carefully vetted opportunities 
                that align with both their financial goals and values. Each fund focuses on a specific sector 
                where we've developed expertise and a strong network of partners.
              </p>
            </div>

            {/* How Our Funds Work */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">How Our Impact Funds Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Our impact funds operate as professionally managed investment vehicles that pool capital from multiple 
                  investors to finance businesses and projects with dual financial and impact objectives.
                </p>

                <div className="space-y-4">
                  {investmentProcess.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navyblue text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-navyblue">{item.step}</h4>
                        <p className="text-charcoal">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fund Details */}
            <Tabs defaultValue="agri" className="mb-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="agri">Agri Fund</TabsTrigger>
                <TabsTrigger value="property">Property Fund</TabsTrigger>
                <TabsTrigger value="energy">Energy Fund</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise Fund</TabsTrigger>
              </TabsList>
              
              <TabsContent value="agri">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-green-700 to-green-900 text-white">
                    <CardTitle>Sankofa Agri Impact Fund</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>
                      The Sankofa Agri Impact Fund invests in sustainable agricultural ventures across South Africa, focusing on food 
                      security, rural development, and environmentally responsible farming practices.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Sustainable farming operations</li>
                          <li>Agricultural technology innovations</li>
                          <li>Food processing and distribution</li>
                          <li>Rural agricultural infrastructure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Enhance food security</li>
                          <li>Create rural employment</li>
                          <li>Promote sustainable practices</li>
                          <li>Support smallholder farmers</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                        <p className="text-xl font-bold text-navyblue">8-12% p.a.</p>
                      </div>
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                        <p className="text-xl font-bold text-navyblue">R 50,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="property">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                    <CardTitle>Sankofa Property Impact Fund</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>
                      The Sankofa Property Impact Fund invests in residential and commercial property developments that address 
                      housing needs while generating sustainable returns for investors.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Affordable housing developments</li>
                          <li>Mixed-use community projects</li>
                          <li>Energy-efficient building retrofits</li>
                          <li>Community-centered commercial spaces</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Increase housing access</li>
                          <li>Revitalize communities</li>
                          <li>Reduce building environmental footprint</li>
                          <li>Support local economic development</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                        <p className="text-xl font-bold text-navyblue">9-14% p.a.</p>
                      </div>
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                        <p className="text-xl font-bold text-navyblue">R 100,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="energy">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-800 text-white">
                    <CardTitle>Sankofa Energy Impact Fund</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>
                      The Sankofa Energy Impact Fund invests in renewable energy projects and clean technology initiatives that 
                      promote sustainable energy solutions while delivering competitive financial returns.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Solar energy installations</li>
                          <li>Wind power projects</li>
                          <li>Energy storage solutions</li>
                          <li>Energy efficiency technologies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Reduce carbon emissions</li>
                          <li>Expand renewable energy access</li>
                          <li>Support energy independence</li>
                          <li>Create green jobs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                        <p className="text-xl font-bold text-navyblue">10-15% p.a.</p>
                      </div>
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                        <p className="text-xl font-bold text-navyblue">R 75,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="enterprise">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
                    <CardTitle>Sankofa Enterprise Impact Fund</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>
                      The Sankofa Enterprise Impact Fund invests in small and medium-sized enterprises (SMEs) with high growth potential
                      and positive social impact, focusing on job creation and economic development.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Growth-stage SMEs</li>
                          <li>Social enterprises</li>
                          <li>Township businesses</li>
                          <li>Women and youth-led enterprises</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Create quality employment</li>
                          <li>Support entrepreneurship</li>
                          <li>Drive inclusive growth</li>
                          <li>Build sustainable businesses</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                        <p className="text-xl font-bold text-navyblue">12-18% p.a.</p>
                      </div>
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                        <p className="text-xl font-bold text-navyblue">R 50,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* For Investors Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-navyblue mb-6 text-center">For LMCA Clients</h3>
              <div className="space-y-6">
                <p>
                  As an LMCA client, you have privileged access to our impact fund investment opportunities. Our funds provide:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Professional Management:</strong> Our experienced team handles all aspects of deal sourcing, due diligence, and investment management.</li>
                  <li><strong>Portfolio Diversification:</strong> Invest across multiple sectors and asset classes to balance risk and return.</li>
                  <li><strong>Competitive Returns:</strong> Our funds target market-competitive financial returns alongside measurable impact.</li>
                  <li><strong>Impact Reporting:</strong> Receive regular updates on both the financial performance and social/environmental impact of your investments.</li>
                  <li><strong>Integration with BUS Program:</strong> Seamlessly connect your business management through our BUS program with investment opportunities through our funds.</li>
                </ul>

                <div className="mt-8 p-6 bg-lightgray rounded-lg text-center">
                  <h4 className="text-xl font-bold text-navyblue mb-4">Ready to invest with purpose?</h4>
                  <p className="mb-6">Contact us to learn more about current investment opportunities in our impact funds.</p>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors"
                  >
                    Explore Investment Opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactFunds;
