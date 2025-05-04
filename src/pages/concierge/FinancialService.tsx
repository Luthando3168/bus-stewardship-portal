
import React from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Wallet, CreditCard, Coins, Briefcase, Shield, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <div className="space-y-10">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-6">
            MCA Direct has partnered with industry leaders Fedgroup and Verum Capital 
            to offer exclusive financial planning services tailored to your unique needs.
          </p>
          <div className="flex justify-center space-x-8 items-center">
            <div className="text-center">
              <div className="font-bold text-navyblue text-lg mb-2">In partnership with</div>
              <div className="flex space-x-6 items-center">
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                  <span className="font-bold text-blue-700">Fedgroup</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                  <span className="font-bold text-green-700">Verum Capital</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="wealth" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="wealth">Wealth Management</TabsTrigger>
            <TabsTrigger value="retirement">Retirement Planning</TabsTrigger>
            <TabsTrigger value="estate">Estate Planning</TabsTrigger>
            <TabsTrigger value="insurance">Risk & Insurance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wealth" className="space-y-6">
            <SectionTitle title="Wealth Management" subtitle="Grow and protect your assets through expert management" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Investment Advisory</h3>
                  <p className="text-gray-700 mb-4">
                    Our team of financial experts will help you build a diversified investment
                    portfolio tailored to your risk tolerance and financial goals.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Personalized investment strategies</li>
                    <li>Regular portfolio reviews and rebalancing</li>
                    <li>Access to exclusive investment opportunities</li>
                    <li>Tax-efficient investment structures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Wealth Structuring</h3>
                  <p className="text-gray-700 mb-4">
                    Optimize your wealth through efficient structures that minimize tax and maximize growth.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Trust formation and management</li>
                    <li>Offshore investment structures</li>
                    <li>Family wealth planning</li>
                    <li>Business succession planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="retirement" className="space-y-6">
            <SectionTitle title="Retirement Planning" subtitle="Secure your financial future with comprehensive retirement solutions" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Retirement Income Strategies</h3>
                  <p className="text-gray-700 mb-4">
                    Design a retirement income plan that ensures financial security throughout your retirement years.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Retirement income modeling and projections</li>
                    <li>Pension optimization strategies</li>
                    <li>Living annuity management</li>
                    <li>Tax-efficient withdrawal strategies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Retirement Savings</h3>
                  <p className="text-gray-700 mb-4">
                    Build retirement savings through structured and tax-efficient investment vehicles.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Retirement annuity planning</li>
                    <li>Pension and provident fund optimization</li>
                    <li>Tax-free savings accounts</li>
                    <li>Additional retirement savings strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="estate" className="space-y-6">
            <SectionTitle title="Estate Planning" subtitle="Preserve your legacy through comprehensive estate planning" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Will Preparation & Estate Administration</h3>
                  <p className="text-gray-700 mb-4">
                    Ensure your assets are distributed according to your wishes with professional estate planning.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Professionally drafted wills</li>
                    <li>Testament execution</li>
                    <li>Estate administration services</li>
                    <li>Executor services</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Trust Services</h3>
                  <p className="text-gray-700 mb-4">
                    Protect and manage your assets through professionally managed trust structures.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Inter vivos trust formation</li>
                    <li>Testamentary trust planning</li>
                    <li>Trust administration services</li>
                    <li>Estate duty minimization strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="insurance" className="space-y-6">
            <SectionTitle title="Risk & Insurance" subtitle="Protect yourself and your loved ones from financial risks" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Life Insurance & Risk Cover</h3>
                  <p className="text-gray-700 mb-4">
                    Protect your family's financial future with comprehensive life and risk insurance solutions.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Life insurance needs analysis</li>
                    <li>Disability cover assessment</li>
                    <li>Critical illness protection</li>
                    <li>Income protection insurance</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-3">Business Insurance</h3>
                  <p className="text-gray-700 mb-4">
                    Safeguard your business interests with comprehensive business risk solutions.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Key person insurance</li>
                    <li>Buy-and-sell agreements</li>
                    <li>Business overhead expense insurance</li>
                    <li>Business continuity planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-navyblue mb-4">Frequently Asked Questions</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-navyblue">How does the financial planning process work?</AccordionTrigger>
              <AccordionContent>
                Our financial planning process begins with a comprehensive assessment of your current financial situation, 
                goals, and risk tolerance. We then develop a customized financial plan that addresses your specific needs 
                and objectives. Our team works closely with you to implement the plan and provides ongoing monitoring and 
                adjustments as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-navyblue">What makes your partnership with Fedgroup and Verum Capital unique?</AccordionTrigger>
              <AccordionContent>
                Our strategic partnership with Fedgroup and Verum Capital gives our clients access to a wider range of 
                investment opportunities, industry expertise, and innovative financial solutions. This collaboration allows 
                us to provide comprehensive financial services tailored to your unique needs while leveraging the strengths 
                and resources of established financial institutions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-navyblue">What are the fees for your financial planning services?</AccordionTrigger>
              <AccordionContent>
                Our fee structure varies depending on the complexity of your financial situation and the specific services 
                you require. We offer both fee-based planning and commission-based options. During your initial consultation, 
                we will provide transparent information about all costs associated with our services, ensuring you have a 
                clear understanding of the value we provide.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-navyblue">How often will my financial plan be reviewed?</AccordionTrigger>
              <AccordionContent>
                We believe in proactive financial planning, which includes regular reviews of your financial situation and 
                progress toward your goals. Typically, we schedule comprehensive reviews annually, with additional check-ins 
                quarterly or as significant life events or market changes occur. This ensures that your financial plan remains 
                aligned with your evolving needs and objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-navyblue/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-navyblue mb-4">Ready to secure your financial future?</h3>
          <p className="text-gray-700 mb-6">
            Schedule a consultation with our financial planning experts to create your personalized financial plan.
          </p>
          <Button 
            onClick={handleConsultationRequest} 
            className="bg-gold hover:bg-gold/90 text-white"
          >
            <Users className="mr-2 h-5 w-5" />
            Request a Consultation
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default FinancialService;
