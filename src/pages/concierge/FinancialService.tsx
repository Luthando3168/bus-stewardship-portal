
import React from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Wallet, CreditCard, Coins, Briefcase, Shield, Users, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const FinancialService = () => {
  const handleConsultationRequest = () => {
    toast.success("Consultation request sent! Our team will contact you shortly.");
  };

  return (
    <ServicePageTemplate
      title="Financial Planning Services"
      description="Comprehensive financial planning in partnership with Fedgroup and Verum Capital"
      icon={Wallet}
      color="text-green-600"
      ownershipNote="Premium Partnership"
    >
      <div className="space-y-12">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              MCA Direct has partnered with industry leaders Fedgroup and Verum Capital 
              to offer exclusive financial planning services tailored to your unique needs.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="text-center">
                <div className="font-bold text-navyblue text-xl mb-4">Our Partners</div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="font-bold text-blue-700 text-lg">Fedgroup</span>
                  </div>
                  <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="font-bold text-green-700 text-lg">Verum Capital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="wealth" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-muted/20">
            <TabsTrigger value="wealth" className="py-3 data-[state=active]:bg-white data-[state=active]:text-navyblue data-[state=active]:shadow-sm">
              <Wallet className="mr-2 h-5 w-5" />
              <span>Wealth Management</span>
            </TabsTrigger>
            <TabsTrigger value="retirement" className="py-3 data-[state=active]:bg-white data-[state=active]:text-navyblue data-[state=active]:shadow-sm">
              <Briefcase className="mr-2 h-5 w-5" />
              <span>Retirement Planning</span>
            </TabsTrigger>
            <TabsTrigger value="estate" className="py-3 data-[state=active]:bg-white data-[state=active]:text-navyblue data-[state=active]:shadow-sm">
              <Shield className="mr-2 h-5 w-5" />
              <span>Estate Planning</span>
            </TabsTrigger>
            <TabsTrigger value="insurance" className="py-3 data-[state=active]:bg-white data-[state=active]:text-navyblue data-[state=active]:shadow-sm">
              <Coins className="mr-2 h-5 w-5" />
              <span>Risk & Insurance</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="wealth" className="space-y-8 focus:outline-none">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
              <SectionTitle 
                title="Wealth Management" 
                subtitle="Grow and protect your assets through expert management" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                    Investment Advisory
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Our team of financial experts will help you build a diversified investment
                    portfolio tailored to your risk tolerance and financial goals.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Personalized investment strategies', 'Regular portfolio reviews', 
                      'Access to exclusive investment opportunities', 'Tax-efficient structures'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Wealth Structuring
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Optimize your wealth through efficient structures that minimize tax and maximize growth potential over time.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Trust formation and management', 'Offshore investment structures', 
                      'Family wealth planning', 'Business succession planning'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="retirement" className="space-y-8 focus:outline-none">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8">
              <SectionTitle 
                title="Retirement Planning" 
                subtitle="Secure your financial future with comprehensive retirement solutions" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-amber-50 p-4 border-b border-amber-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-amber-600" />
                    Retirement Income Strategies
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Design a retirement income plan that ensures financial security throughout your retirement years.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Retirement income modeling', 'Pension optimization strategies', 
                      'Living annuity management', 'Tax-efficient withdrawal strategies'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-amber-50 p-4 border-b border-amber-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-amber-600" />
                    Retirement Savings
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Build retirement savings through structured and tax-efficient investment vehicles.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Retirement annuity planning', 'Pension and provident fund optimization', 
                      'Tax-free savings accounts', 'Additional retirement savings strategies'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="estate" className="space-y-8 focus:outline-none">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8">
              <SectionTitle 
                title="Estate Planning" 
                subtitle="Preserve your legacy through comprehensive estate planning" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-purple-50 p-4 border-b border-purple-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    Will Preparation & Estate Administration
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Ensure your assets are distributed according to your wishes with professional estate planning.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Professionally drafted wills', 'Testament execution', 
                      'Estate administration services', 'Executor services'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-purple-50 p-4 border-b border-purple-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-600" />
                    Trust Services
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Protect and manage your assets through professionally managed trust structures.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Inter vivos trust formation', 'Testamentary trust planning', 
                      'Trust administration services', 'Estate duty minimization strategies'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="insurance" className="space-y-8 focus:outline-none">
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 mb-8">
              <SectionTitle 
                title="Risk & Insurance" 
                subtitle="Protect yourself and your loved ones from financial risks" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-red-600" />
                    Life Insurance & Risk Cover
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Protect your family's financial future with comprehensive life and risk insurance solutions.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Life insurance needs analysis', 'Disability cover assessment', 
                      'Critical illness protection', 'Income protection insurance'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="text-xl font-bold text-navyblue flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-red-600" />
                    Business Insurance
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Safeguard your business interests with comprehensive business risk solutions.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {['Key person insurance', 'Buy-and-sell agreements', 
                      'Business overhead expense insurance', 'Business continuity planning'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="mb-6 flex items-center">
            <h3 className="text-2xl font-bold text-navyblue">Frequently Asked Questions</h3>
            <Badge variant="outline" className="ml-4 bg-blue-50 text-blue-700 border-blue-200">
              Common Questions
            </Badge>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium text-navyblue hover:text-blue-700 hover:no-underline">
                How does the financial planning process work?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-700 pt-2 pb-4">
                Our financial planning process begins with a comprehensive assessment of your current financial situation, 
                goals, and risk tolerance. We then develop a customized financial plan that addresses your specific needs 
                and objectives. Our team works closely with you to implement the plan and provides ongoing monitoring and 
                adjustments as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium text-navyblue hover:text-blue-700 hover:no-underline">
                What makes your partnership with Fedgroup and Verum Capital unique?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-700 pt-2 pb-4">
                Our strategic partnership with Fedgroup and Verum Capital gives our clients access to a wider range of 
                investment opportunities, industry expertise, and innovative financial solutions. This collaboration allows 
                us to provide comprehensive financial services tailored to your unique needs while leveraging the strengths 
                and resources of established financial institutions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium text-navyblue hover:text-blue-700 hover:no-underline">
                What are the fees for your financial planning services?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-700 pt-2 pb-4">
                Our fee structure varies depending on the complexity of your financial situation and the specific services 
                you require. We offer both fee-based planning and commission-based options. During your initial consultation, 
                we will provide transparent information about all costs associated with our services, ensuring you have a 
                clear understanding of the value we provide.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium text-navyblue hover:text-blue-700 hover:no-underline">
                How often will my financial plan be reviewed?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-700 pt-2 pb-4">
                We believe in proactive financial planning, which includes regular reviews of your financial situation and 
                progress toward your goals. Typically, we schedule comprehensive reviews annually, with additional check-ins 
                quarterly or as significant life events or market changes occur. This ensures that your financial plan remains 
                aligned with your evolving needs and objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="relative bg-navyblue rounded-xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navyblue via-navyblue to-blue-900 opacity-90"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to secure your financial future?</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our financial planning experts to create your personalized financial plan.
            </p>
            <Button 
              onClick={handleConsultationRequest} 
              size="lg"
              className="bg-gold hover:bg-lightgold text-navyblue font-medium px-8 py-3 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default FinancialService;
