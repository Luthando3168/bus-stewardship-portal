
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Foundation = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("youth");
  
  const programs = [
    {
      id: "youth",
      title: "Youth Empowerment",
      description: "Developing the next generation of African leaders through education, mentorship, and skills development.",
      initiatives: [
        "Scholarship programs for underprivileged students",
        "Digital skills training for youth in townships",
        "Entrepreneurship development workshops",
        "Career guidance and mentorship",
        "Leadership development programs"
      ]
    },
    {
      id: "sme",
      title: "SME Development",
      description: "Supporting small and medium-sized enterprises through funding, mentorship, and business development services.",
      initiatives: [
        "Micro-finance for township entrepreneurs",
        "Business skills training workshops",
        "Mentorship from seasoned business professionals",
        "Market access facilitation",
        "Business incubation services"
      ]
    },
    {
      id: "housing",
      title: "Affordable Housing",
      description: "Working to increase access to quality, affordable housing in underserved communities.",
      initiatives: [
        "Community housing development projects",
        "Housing finance assistance programs",
        "Sustainable building technology implementation",
        "Housing cooperatives support",
        "Community land trusts"
      ]
    },
    {
      id: "education",
      title: "Affordable Education",
      description: "Expanding access to quality education at all levels in underserved communities.",
      initiatives: [
        "Early childhood development centers",
        "After-school learning programs",
        "Teacher development initiatives",
        "Educational materials and resources distribution",
        "School infrastructure improvement projects"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Access",
      description: "Improving healthcare access and outcomes in underserved communities through various initiatives.",
      initiatives: [
        "Mobile health clinics in rural areas",
        "Health education and awareness campaigns",
        "Maternal and child health programs",
        "Healthcare worker training",
        "Medical equipment donations to community clinics"
      ]
    }
  ];

  // Find current program based on active tab
  const currentProgram = programs.find(p => p.id === activeTab) || programs[0];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSelectChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Luthando Maduna Foundation"
            subtitle="Driving positive social change through strategic community initiatives"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-10">
            <div className="text-charcoal space-y-6">
              <p className="text-lg">
                The Luthando Maduna Foundation is the philanthropic arm of our organization, dedicated to 
                addressing critical social challenges in South African communities. Through strategic 
                programs and partnerships, we work to create lasting positive impact in key areas of 
                social and economic development.
              </p>
              <p>
                Our foundation works hand-in-hand with our impact funds, channeling a portion of investment 
                returns into community development initiatives that align with our impact objectives. This 
                creates a virtuous cycle where financial success directly contributes to greater social good.
              </p>
            </div>

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

            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6">Key Programs</h3>
              
              {isMobile ? (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    (Click dropdown to see programs)
                  </p>
                  <Select value={activeTab} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map(program => (
                        <SelectItem key={program.id} value={program.id}>
                          {program.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-6">
                    <Card>
                      <CardContent className="pt-6 space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-navyblue">{currentProgram.title}</h4>
                          <p className="mt-2">{currentProgram.description}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-navyblue mb-3">Key Initiatives:</h5>
                          <ul className="list-disc pl-5 space-y-2">
                            {currentProgram.initiatives.map((initiative, i) => (
                              <li key={i}>{initiative}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
                  <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
                    {programs.map(program => (
                      <TabsTrigger key={program.id} value={program.id}>
                        {program.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {programs.map(program => (
                    <TabsContent key={program.id} value={program.id}>
                      <Card>
                        <CardContent className="pt-6 space-y-6">
                          <div>
                            <h4 className="text-xl font-bold text-navyblue">{program.title}</h4>
                            <p className="mt-2">{program.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-navyblue mb-3">Key Initiatives:</h5>
                            <ul className="list-disc pl-5 space-y-2">
                              {program.initiatives.map((initiative, i) => (
                                <li key={i}>{initiative}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6">Our Impact</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">1,200+</p>
                      <p className="text-sm text-muted-foreground">Youth trained in digital skills</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">300+</p>
                      <p className="text-sm text-muted-foreground">Small businesses supported</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">5</p>
                      <p className="text-sm text-muted-foreground">Community development projects</p>
                    </div>
                  </div>
                  <p>
                    Through our foundation programs, we strive to create meaningful, measurable impact in the communities 
                    we serve. We rigorously track outcomes and regularly publish impact reports to ensure transparency 
                    and accountability to our stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-lightgray p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-navyblue mb-4">Get Involved</h3>
              <p className="mb-6">
                There are many ways to support the work of the Luthando Maduna Foundation, from financial 
                contributions to volunteering your time and expertise.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
