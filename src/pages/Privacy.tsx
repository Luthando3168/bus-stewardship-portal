
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your personal information"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-8 text-charcoal">
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">1. Introduction</h3>
              <p>
                Luthando Maduna Chartered Accountants (LMCA) respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you how we look after your personal data when you visit our website and when you engage 
                with our services, and tell you about your privacy rights and how the law protects you.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">2. Information We Collect</h3>
              <p className="mb-3">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, gender, and identification numbers.</li>
                <li><strong>Contact Data</strong> includes billing address, residential address, email address and telephone numbers.</li>
                <li><strong>Financial Data</strong> includes bank account details, payment card details, financial statements, tax information, and investment history.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Profile Data</strong> includes your username and password, your interests, preferences, feedback and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">3. How We Use Your Information</h3>
              <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide professional services to you under our engagement agreement</li>
                <li>To manage your investment accounts and execute transactions</li>
                <li>For tax planning and compliance purposes</li>
                <li>To provide business management services under our BUS program</li>
                <li>To communicate with you about our services and products</li>
                <li>To comply with our legal and regulatory obligations</li>
                <li>To notify you about changes to our services</li>
                <li>To administer and protect our business and website</li>
                <li>To improve our website, products/services, marketing, and customer relationships</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">4. Legal Basis for Processing</h3>
              <p className="mb-3">
                We rely on the following legal bases for processing your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Consent:</strong> Where you have given us explicit consent to process your data for specific purposes.</li>
                <li><strong>Performance of Contract:</strong> Processing necessary for the performance of a contract with you.</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with our legal obligations.</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, provided these interests do not override your fundamental rights and freedoms.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">5. Data Security</h3>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">6. Data Retention</h3>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your personal data, and applicable legal requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">7. Your Rights</h3>
              <p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of your personal information</li>
                <li>Request erasure of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="mt-3">
                If you wish to exercise any of these rights, please contact us using the details provided below.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">8. Third-Party Links</h3>
              <p>
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">9. Changes to the Privacy Policy</h3>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and, where appropriate, notifying you by email.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">10. Contact Us</h3>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-3">
                <p><strong>Luthando Maduna Chartered Accountants</strong></p>
                <p>28 Beacon Avenue, Linbro Park AH</p>
                <p>Sandton, 2065</p>
                <p>Email: info@luthandoms.co.za</p>
                <p>Phone: 062 019 3208</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-10">
              <p className="text-sm text-muted-foreground">Last Updated: April 20, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
