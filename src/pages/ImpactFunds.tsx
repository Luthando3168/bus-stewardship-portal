import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const funds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    gradient: "from-green-700 to-green-900",
    headerBg: "bg-gradient-to-r from-green-700 to-green-900 text-white",
    fundTitle: "MyFarm Impact Fund",
    description:
      "The MyFarm Impact Fund invests in sustainable agricultural businesses and ventures, driving positive change in food security and rural economy.",
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
    deals: [
      {
        id: "agrourban-oasis",
        title: "AgroUrban Oasis",
        description: "Urban farming initiative where clients can own trading companies or invest in the farm as a whole to earn profits. Minimum investment is R5,000.",
        minInvestment: "R 5,000",
        targetReturn: "10.5%",
        term: "5 years",
        image: "/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png",
        highlights: [
          "Urban farming with eco-friendly design",
          "Multiple revenue streams from various produce",
          "Training and employment opportunities for local youth",
          "Direct supply to Lifestyle Fruits and Veg stores"
        ]
      }
    ]
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    gradient: "from-blue-700 to-blue-900",
    headerBg: "bg-gradient-to-r from-blue-700 to-blue-900 text-white",
    fundTitle: "MyProperty Impact Fund",
    description:
      "The MyProperty Impact Fund invests in property businesses and developments focused on affordable housing and community growth.",
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
    deals: [
      {
        id: "ekasi-mix",
        title: "eKasi Mix Use",
        description: "Modern residential development in township areas with affordable housing and commercial spaces. Invest by owning a unit outright or co-own. Minimum investment R5,000.",
        minInvestment: "R 5,000",
        targetReturn: "12.5%",
        term: "7 years",
        image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png",
        highlights: [
          "Prime location in growing township area",
          "Option for full ownership or co-ownership",
          "Built-in commercial spaces for rental income",
          "Flexible payment options through Standard Bank accounts"
        ]
      }
    ]
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    gradient: "from-amber-600 to-amber-800",
    headerBg: "bg-gradient-to-r from-amber-600 to-amber-800 text-white",
    fundTitle: "MyEnergy Impact Fund",
    description:
      "The MyEnergy Impact Fund invests in renewable energy projects and clean technology initiatives for a greener future.",
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
    deals: [
      // No featured business profiles yet
    ]
  },
  {
    id: "myenterprise",
    name: "MyEnterprise Impact Fund",
    gradient: "from-purple-700 to-purple-900",
    headerBg: "bg-gradient-to-r from-purple-700 to-purple-900 text-white",
    fundTitle: "MyEnterprise Impact Fund",
    description:
      "The MyEnterprise Impact Fund invests in SMEs and franchises making a positive impact in communities.",
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
    deals: [
      {
        id: "lifestyle-complex",
        title: "Lifestyle Mini Complex",
        description: "Own the Lifestyle Mini Complex and three trading companies: Food Corner (groceries), Lifestyle Meat Co (meat & products), and Lifestyle Fruits & Veg (produce from MyFarm Impact Fund). Minimum investment of R5,000.",
        minInvestment: "R 5,000",
        targetReturn: "14.5%",
        term: "6 years",
        image: "/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png",
        highlights: [
          "Three established businesses in one investment",
          "Strong community presence and customer base",
          "Vertically integrated supply chain with MyFarm Impact Fund",
          "Multiple revenue streams for stability"
        ]
      },
      {
        id: "my-franchise",
        title: "MyFranchise",
        description: "Invest into multiple franchises. Select various franchises as advertised on the MyFranchise website and build your portfolio. Minimum investment of R5,000.",
        minInvestment: "R 5,000",
        targetReturn: "16.2%",
        term: "5 years",
        image: "/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png",
        highlights: [
          "Access to established franchise opportunities",
          "Lower risk through diversification across multiple brands",
          "Professional management of franchise operations",
          "Flexible investment options to match risk appetite"
        ]
      }
    ]
  },
];

const ImpactFunds = () => {
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  const isMobile = useIsMobile();

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
  
  const handleInvestClick = (dealId: string) => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      toast.error("Please register or login to invest in this opportunity");
      // Redirect to register page after a short delay
      setTimeout(() => {
        window.location.href = "/register";
      }, 2000);
      return;
    }
    
    // If logged in, redirect to user dashboard
    window.location.href = `/user/new-deals`;
  };

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

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navyblue mb-6 text-center">Featured Investment Products</h2>
              <div className="grid grid-cols-1 gap-8">
                {funds.map((fund) => (
                  fund.deals.length > 0 && (
                    <div key={fund.id} className="space-y-6">
                      <h3 className={`text-xl font-bold text-white px-4 py-2 rounded-md ${fund.headerBg.replace('bg-gradient-to-r', '')}`}>
                        {fund.fundTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fund.deals.map((deal) => (
                          <Card key={deal.id} id={deal.id} className="overflow-hidden flex flex-col">
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={deal.image} 
                                alt={deal.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardHeader>
                              <CardTitle>{deal.title}</CardTitle>
                              <CardDescription>{deal.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 flex flex-col flex-grow">
                              <a
                                href={
                                  deal.id === "ekasi-mix"
                                    ? "https://kasi-impact-hub.lovable.app/"
                                    : deal.id === "lifestyle-complex"
                                    ? "https://franchise-flow-invest.lovable.app/"
                                    : deal.id === "agrourban-oasis"
                                    ? "https://preview--agro-urban-oasis-invest.lovable.app/"
                                    : deal.id === "my-franchise"
                                    ? "https://franchise-flow-invest.lovable.app/"
                                    : "#"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-gold hover:text-navyblue font-medium underline text-sm"
                              >
                                Visit Website
                              </a>
                              <div>
                                <h4 className="font-semibold mb-2 text-sm">Investment Highlights:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  {deal.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button 
                                className="w-full bg-gold hover:bg-lightgold"
                                onClick={() => handleInvestClick(deal.id)}
                              >
                                Invest Now
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

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
