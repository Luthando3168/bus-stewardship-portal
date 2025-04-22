
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ImpactFunds = () => {
  const isMobile = useIsMobile();

  const funds = [
    {
      id: "agri",
      name: "Agri Impact Fund",
      gradient: "from-green-700 to-green-900",
      headerBg: "bg-gradient-to-r from-green-700 to-green-900 text-white",
      fundTitle: "Sankofa Agri Impact Fund",
      description:
        "The Sankofa Agri Impact Fund invests in sustainable agricultural ventures across South Africa, focusing on food security, rural development, and environmentally responsible farming practices.",
      focus: [
        "Sustainable farming operations",
        "Agricultural technology innovations",
        "Food processing and distribution",
        "Rural agricultural infrastructure",
      ],
      impact: [
        "Enhance food security",
        "Create rural employment",
        "Promote sustainable practices",
        "Support smallholder farmers",
      ],
      targetReturn: "8-12% p.a.",
      minimumInvestment: "R 5,000",
    },
    {
      id: "property",
      name: "Property Impact Fund",
      gradient: "from-blue-700 to-blue-900",
      headerBg: "bg-gradient-to-r from-blue-700 to-blue-900 text-white",
      fundTitle: "Sankofa Property Impact Fund",
      description:
        "The Sankofa Property Impact Fund invests in residential and commercial property developments that address housing needs while generating sustainable returns for investors.",
      focus: [
        "Affordable housing developments",
        "Mixed-use community projects",
        "Energy-efficient building retrofits",
        "Community-centered commercial spaces",
      ],
      impact: [
        "Increase housing access",
        "Revitalize communities",
        "Reduce building environmental footprint",
        "Support local economic development",
      ],
      targetReturn: "9-14% p.a.",
      minimumInvestment: "R 5,000",
    },
    {
      id: "energy",
      name: "Energy Impact Fund",
      gradient: "from-amber-600 to-amber-800",
      headerBg: "bg-gradient-to-r from-amber-600 to-amber-800 text-white",
      fundTitle: "Sankofa Energy Impact Fund",
      description:
        "The Sankofa Energy Impact Fund invests in renewable energy projects and clean technology initiatives that promote sustainable energy solutions while delivering competitive financial returns.",
      focus: [
        "Solar energy installations",
        "Wind power projects",
        "Energy storage solutions",
        "Energy efficiency technologies",
      ],
      impact: [
        "Reduce carbon emissions",
        "Expand renewable energy access",
        "Support energy independence",
        "Create green jobs",
      ],
      targetReturn: "10-15% p.a.",
      minimumInvestment: "R 5,000",
    },
    {
      id: "enterprise",
      name: "Enterprise Impact Fund",
      gradient: "from-purple-700 to-purple-900",
      headerBg: "bg-gradient-to-r from-purple-700 to-purple-900 text-white",
      fundTitle: "Sankofa Enterprise Impact Fund",
      description:
        "The Sankofa Enterprise Impact Fund invests in small and medium-sized enterprises (SMEs) with high growth potential and positive social impact, focusing on job creation and economic development.",
      focus: [
        "Growth-stage SMEs",
        "Social enterprises",
        "Township businesses",
        "Women and youth-led enterprises",
      ],
      impact: [
        "Create quality employment",
        "Support entrepreneurship",
        "Drive inclusive growth",
        "Build sustainable businesses",
      ],
      targetReturn: "12-18% p.a.",
      minimumInvestment: "R 5,000",
    },
  ];

  const investmentProcess = [
    {
      step: "Capital Pooling",
      description:
        "We pool capital from multiple investors to achieve scale and diversification.",
    },
    {
      step: "Deal Sourcing & Due Diligence",
      description:
        "Our team identifies and thoroughly vets investment opportunities using rigorous criteria.",
    },
    {
      step: "Structured Investments",
      description:
        "We design investment structures that align financial returns with measurable impact outcomes.",
    },
    {
      step: "Active Management",
      description:
        "We provide ongoing support and oversight to portfolio companies to enhance performance.",
    },
    {
      step: "Impact & Financial Reporting",
      description:
        "Regular reporting on both financial returns and social/environmental impact metrics.",
    },
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

            {/* Mobile: accordion, Desktop: tabs */}
            {isMobile ? (
              <div className="mb-12">
                <Accordion type="single" collapsible className="w-full">
                  {funds.map((fund) => (
                    <AccordionItem value={fund.id} key={fund.id}>
                      <AccordionTrigger className="font-montserrat text-lg font-bold px-4 bg-lightgray rounded hover:bg-gray-200 transition-all mb-2">
                        {fund.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Card>
                          <CardHeader className={fund.headerBg}>
                            <CardTitle>{fund.fundTitle}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6 space-y-6">
                            <p>{fund.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {fund.focus.map((f, idx) => (
                                    <li key={idx}>{f}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {fund.impact.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                              <div className="p-4 bg-lightgray rounded-lg">
                                <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                                <p className="text-xl font-bold text-navyblue">{fund.targetReturn}</p>
                              </div>
                              <div className="p-4 bg-lightgray rounded-lg">
                                <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                                <p className="text-xl font-bold text-navyblue">{fund.minimumInvestment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <Tabs defaultValue="agri" className="mb-12">
                <TabsList className="grid w-full grid-cols-4">
                  {funds.map(fund => (
                    <TabsTrigger key={fund.id} value={fund.id}>{fund.name.replace(" Impact Fund", " Fund")}</TabsTrigger>
                  ))}
                </TabsList>
                {funds.map(fund => (
                  <TabsContent value={fund.id} key={fund.id}>
                    <Card>
                      <CardHeader className={fund.headerBg}>
                        <CardTitle>{fund.fundTitle}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-6">
                        <p>{fund.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {fund.focus.map((f, idx) => (
                                <li key={idx}>{f}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {fund.impact.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          <div className="p-4 bg-lightgray rounded-lg">
                            <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                            <p className="text-xl font-bold text-navyblue">{fund.targetReturn}</p>
                          </div>
                          <div className="p-4 bg-lightgray rounded-lg">
                            <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                            <p className="text-xl font-bold text-navyblue">{fund.minimumInvestment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            )}

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
