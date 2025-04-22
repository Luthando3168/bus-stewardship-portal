import React from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/SectionTitle";

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About LM Chartered Accountants"
            subtitle="Professional financial services with a mission to grow and preserve wealth"
            centered
          />

          <div className="max-w-4xl mx-auto text-charcoal space-y-6 mt-8">
            <p>
              Luthando Maduna Chartered Accountants (LMCA) is a professional services firm founded on the principles of integrity,
              excellence, and innovation in the financial services industry. As a registered firm with the South African Institute of Chartered Accountants (SAICA),
              we pride ourselves on maintaining the highest standards of accounting practice while helping our clients achieve their financial goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-4">Our Vision</h3>
                  <p>
                    To be the leading chartered accounting firm that empowers individuals and businesses through professional
                    management, financial stewardship, and impact investment opportunities that benefit all stakeholders.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-4">Our Mission</h3>
                  <p>
                    To provide comprehensive financial services that enable our clients to build and preserve wealth through
                    professional business management and strategic investments in sectors that drive positive social and
                    economic impact in South Africa.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-navyblue mb-6">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Integrity</h4>
                  <p>We uphold the highest ethical standards in all our professional interactions, ensuring transparency and honesty.</p>
                </div>
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Excellence</h4>
                  <p>We strive for excellence in every aspect of our work, delivering superior service and value to our clients.</p>
                </div>
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Innovation</h4>
                  <p>We constantly seek innovative solutions to complex financial challenges, staying ahead of industry trends.</p>
                </div>
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Accountability</h4>
                  <p>We take responsibility for our actions and decisions, holding ourselves to the highest professional standards.</p>
                </div>
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Social Impact</h4>
                  <p>We believe in creating positive social change through our business practices and investment strategies.</p>
                </div>
                <div className="p-6 rounded-lg bg-light border border-gray-200">
                  <h4 className="text-lg font-semibold text-navyblue mb-2">Growth</h4>
                  <p>We are committed to growing our clients' wealth and contributing to sustainable economic development.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-navyblue mb-6">Our Team</h3>
              <p className="mb-6">
                Our team consists of qualified professionals with extensive experience in accounting, tax, business management,
                and impact investing. Led by our founder, we bring a wealth of knowledge and expertise to help our clients
                navigate complex financial landscapes and achieve their goals.
              </p>
              
              <div className="mt-8 p-6 bg-lightgray rounded-lg">
                <h4 className="text-xl font-bold text-navyblue mb-4">Professional Credentials</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Registered with the South African Institute of Chartered Accountants (SAICA)</li>
                  <li>SAICA Registration Number: 20055210</li>
                  <li>Company Registration: 2019/621826/07</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
