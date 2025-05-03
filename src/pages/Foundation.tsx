
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { useIsMobile } from "@/hooks/use-mobile";
import FoundationIntro from '@/components/foundation/FoundationIntro';
import FlagshipProjects from '@/components/foundation/FlagshipProjects';
import CommunityPartners from '@/components/foundation/CommunityPartners';
import ApproachCards from '@/components/foundation/ApproachCards';
import ProgramTabs from '@/components/foundation/ProgramTabs';
import ImpactMetrics from '@/components/foundation/ImpactMetrics';
import GetInvolved from '@/components/foundation/GetInvolved';

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

  const currentImpactMetrics = [
    { value: "1,200+", description: "Youth trained in digital skills" },
    { value: "300+", description: "Small businesses supported" },
    { value: "5", description: "Community development projects" }
  ];

  const targetImpactMetrics = [
    { value: "2,500+", description: "Youth to be trained in digital skills by 2026" },
    { value: "500+", description: "Small businesses to support by 2025" },
    { value: "10", description: "Community development projects planned" }
  ];

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
            <FoundationIntro />
            
            <FlagshipProjects 
              projects={flagshipProjects} 
              activeProjectTab={activeProjectTab} 
              setActiveProjectTab={setActiveProjectTab}
              isMobile={isMobile} 
            />

            <CommunityPartners />

            <ApproachCards />

            <ProgramTabs 
              programs={programs} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              isMobile={isMobile} 
            />

            <ImpactMetrics 
              title="Our Impact" 
              metrics={currentImpactMetrics}
              description="Through our foundation programs, we strive to create meaningful, measurable impact in the communities 
                we serve. We rigorously track outcomes and regularly publish impact reports to ensure transparency 
                and accountability to our stakeholders."
            />

            <ImpactMetrics 
              title="Our Impact Targets" 
              metrics={targetImpactMetrics}
              description="These ambitious targets reflect our commitment to creating meaningful, sustainable 
                impact in the communities we serve. We are dedicated to tracking our progress and 
                ensuring we meet or exceed these goals through strategic partnerships and focused 
                community development initiatives."
            />

            <GetInvolved />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
