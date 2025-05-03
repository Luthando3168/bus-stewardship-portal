
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Building, Users, HandHeart, MapPin, Landmark } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Foundation = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("youth");
  const [activeProjectTab, setActiveProjectTab] = useState("alex");
  
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

  const flagshipProjects = [
    {
      id: "alex",
      title: "#ChangeAlexNow",
      description: "A transformative urban renewal initiative focused on Alexandra township, aiming to create a model of inclusive urban development that can be replicated across Africa.",
      image: "/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png",
      keyPoints: [
        "Infrastructure development and housing improvements",
        "Local business investment and entrepreneurship support",
        "Community ownership of local services and businesses",
        "Public space revitalization and green areas development",
        "Skills development and job creation within the community"
      ]
    },
    {
      id: "inclusive-cities",
      title: "100 Inclusive Cities",
      description: "A continent-wide initiative to develop urban centers where economic opportunity and quality of life are accessible to all residents, regardless of socioeconomic background.",
      image: "/lovable-uploads/b37923d0-335b-46bc-9852-7d271458f2a9.png", 
      keyPoints: [
        "Scaled urban development model based on #ChangeAlexNow successes",
        "Focus on community ownership of local businesses and services",
        "Integration of sustainable urban planning practices",
        "Partnership with local governments and community organizations",
        "Investment in infrastructure that supports economic inclusion"
      ]
    }
  ];

  const currentProgram = programs.find(p => p.id === activeTab) || programs[0];
  const currentProject = flagshipProjects.find(p => p.id === activeProjectTab) || flagshipProjects[0];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSelectChange = (value: string) => {
    setActiveTab(value);
  };

  const handleProjectTabChange = (value: string) => {
    setActiveProjectTab(value);
  };

  const handleProjectSelectChange = (value: string) => {
    setActiveProjectTab(value);
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

          <div className="max-w-4xl mx-auto mt-12 space-y-12">
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

            {/* Flagship Projects Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-6 text-center">Our Flagship Projects</h2>
              <div className="bg-lightgray rounded-lg p-6 md:p-8 mb-8">
                <p className="text-lg mb-6">
                  Our vision is to transform urban development across Africa, starting with the ambitious 
                  #ChangeAlexNow project in Alexandra township, South Africa. By working with parents of learners, taxi commuters, 
                  social security beneficiaries, and soccer fans across the continent, we're building an inclusive model 
                  where previously disadvantaged communities own the businesses that supply their daily needs.
                </p>
                <p className="text-lg mb-2 font-semibold text-navyblue">
                  This approach serves a dual purpose:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Increasing business ownership among historically disadvantaged communities</li>
                  <li>Generating funds to build inclusive cities where everyone shares in the wealth</li>
                </ul>
                <p className="text-lg">
                  Projects like Alexandra in South Africa symbolize the end of inequality as more people 
                  share in the African economy, creating a model for the 100 Inclusive Cities initiative.
                </p>
              </div>

              {isMobile ? (
                <div className="mb-10">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    (Select a project to learn more)
                  </p>
                  <Select value={activeProjectTab} onValueChange={handleProjectSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Flagship Project" />
                    </SelectTrigger>
                    <SelectContent>
                      {flagshipProjects.map(project => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-6">
                    <Card>
                      <CardContent className="pt-6 space-y-6">
                        <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden mb-4">
                          <img 
                            src={currentProject.image} 
                            alt={currentProject.title}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                        <div>
                          <h4 className="text-xl font-bold text-navyblue flex items-center gap-2">
                            {currentProject.id === 'alex' ? <Building className="h-5 w-5 text-gold" /> : <Globe className="h-5 w-5 text-gold" />}
                            {currentProject.title}
                          </h4>
                          <p className="mt-2">{currentProject.description}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-navyblue mb-3">Key Initiatives:</h5>
                          <ul className="list-disc pl-5 space-y-2">
                            {currentProject.keyPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <Tabs value={activeProjectTab} onValueChange={handleProjectTabChange} className="space-y-6 mb-10">
                  <TabsList className="grid w-full grid-cols-2">
                    {flagshipProjects.map(project => (
                      <TabsTrigger key={project.id} value={project.id} className="flex items-center gap-2">
                        {project.id === 'alex' ? <Building className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                        {project.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {flagshipProjects.map(project => (
                    <TabsContent key={project.id} value={project.id}>
                      <Card>
                        <CardContent className="pt-6 space-y-6">
                          <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden mb-4">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="object-cover w-full h-full"
                            />
                          </AspectRatio>
                          <div>
                            <h4 className="text-xl font-bold text-navyblue">{project.title}</h4>
                            <p className="mt-2">{project.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-navyblue mb-3">Key Initiatives:</h5>
                            <ul className="list-disc pl-5 space-y-2">
                              {project.keyPoints.map((point, i) => (
                                <li key={i}>{point}</li>
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

            {/* Community Partners Section */}
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

            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6">Our Impact Targets</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">2,500+</p>
                      <p className="text-sm text-muted-foreground">Youth to be trained in digital skills by 2026</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">500+</p>
                      <p className="text-sm text-muted-foreground">Small businesses to support by 2025</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">10</p>
                      <p className="text-sm text-muted-foreground">Community development projects planned</p>
                    </div>
                  </div>
                  <p>
                    These ambitious targets reflect our commitment to creating meaningful, sustainable 
                    impact in the communities we serve. We are dedicated to tracking our progress and 
                    ensuring we meet or exceed these goals through strategic partnerships and focused 
                    community development initiatives.
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
