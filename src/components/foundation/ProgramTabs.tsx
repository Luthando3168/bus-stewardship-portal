
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Program {
  id: string;
  title: string;
  description: string;
  initiatives: string[];
}

interface ProgramTabsProps {
  programs: Program[];
  activeTab: string;
  setActiveTab: (value: string) => void;
  isMobile: boolean;
}

const ProgramTabs: React.FC<ProgramTabsProps> = ({ programs, activeTab, setActiveTab, isMobile }) => {
  const currentProgram = programs.find(p => p.id === activeTab) || programs[0];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSelectChange = (value: string) => {
    setActiveTab(value);
  };

  return (
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
  );
};

export default ProgramTabs;
