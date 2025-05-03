
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Globe } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FlagshipProject {
  id: string;
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
}

interface FlagshipProjectsProps {
  projects: FlagshipProject[];
  activeProjectTab: string;
  setActiveProjectTab: (value: string) => void;
  isMobile: boolean;
}

const FlagshipProjects: React.FC<FlagshipProjectsProps> = ({ 
  projects, 
  activeProjectTab, 
  setActiveProjectTab, 
  isMobile 
}) => {
  const currentProject = projects.find(p => p.id === activeProjectTab) || projects[0];

  const handleProjectTabChange = (value: string) => {
    setActiveProjectTab(value);
  };

  const handleProjectSelectChange = (value: string) => {
    setActiveProjectTab(value);
  };

  return (
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
              {projects.map(project => (
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
            {projects.map(project => (
              <TabsTrigger key={project.id} value={project.id} className="flex items-center gap-2">
                {project.id === 'alex' ? <Building className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map(project => (
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
  );
};

export default FlagshipProjects;
