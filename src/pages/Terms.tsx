
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

const Terms = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Terms of Service"
            subtitle="The terms and conditions governing your use of our services"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-8 text-charcoal">
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">1. Introduction</h3>
              <p>
                These terms of service ("Terms") govern your use of the services provided by Luthando Maduna Chartered Accountants 
                ("LMCA", "we", "us", or "our"), including our website, client portal, and professional services. By accessing our 
                website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please 
                do not use our services.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">2. Client Engagement</h3>
              <p className="mb-3">
                All clients must complete and sign our Client Engagement Letter before we commence providing services. The Client 
                Engagement Letter outlines:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scope of services to be provided</li>
                <li>Fee structure and payment terms</li>
                <li>Client and LMCA responsibilities</li>
                <li>Confidentiality provisions</li>
                <li>Term and termination conditions</li>
                <li>Other specific terms relevant to the engagement</li>
              </ul>
              <p className="mt-3">
                The signed Client Engagement Letter forms a legally binding agreement between you and LMCA. In the event of any 
                inconsistency between these Terms and the Client Engagement Letter, the Client Engagement Letter shall prevail.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">3. Bank Mandate Letter</h3>
              <p>
                For clients utilizing our investment services, Business Under Stewardship program, or other services requiring financial 
                transactions on your behalf, you must sign a Bank Mandate Letter authorizing us to transact based on your instructions. 
                This authorization allows us to execute financial transactions in accordance with your explicit instructions and within 
                the scope defined in your mandate letter. We will not perform any transactions without proper authorization and will 
                maintain detailed records of all transactions performed on your behalf.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">4. Professional Services</h3>
              <p className="mb-3">
                Our professional services include but are not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Accounting and bookkeeping services</li>
                <li>Tax planning and compliance services</li>
                <li>Business management under the BUS program</li>
                <li>Investment management through Sankofa Capital Partners</li>
                <li>Corporate finance services</li>
                <li>Business development consulting</li>
                <li>Company registration and compliance</li>
              </ul>
              <p className="mt-3">
                We will provide these services with reasonable skill and care, in accordance with applicable professional standards, 
                and in compliance with relevant laws and regulations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">5. Client Responsibilities</h3>
              <p className="mb-3">As a client, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate, complete, and timely information necessary for us to perform our services</li>
                <li>Notify us promptly of any changes to your personal or business information</li>
                <li>Respond to our requests for information or clarification in a timely manner</li>
                <li>Pay our fees in accordance with the agreed terms</li>
                <li>Use our advice and services for lawful purposes only</li>
                <li>Maintain the confidentiality of any access credentials provided for our client portal</li>
                <li>Review and approve financial statements, tax returns, and other documents we prepare on your behalf</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">6. Fees and Payment</h3>
              <p>
                Our fees for services will be outlined in your Client Engagement Letter. Unless otherwise specified, invoices are 
                payable within 14 days of issuance. Late payments may incur interest charges and could result in suspension of 
                services. For investment services, management fees and performance fees will be detailed in your investment agreement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">7. Confidentiality</h3>
              <p>
                We will maintain the confidentiality of all client information in accordance with professional standards and applicable 
                laws. We will not disclose your information to third parties unless required by law, regulatory obligations, or with 
                your consent. You agree to maintain the confidentiality of any proprietary information, methods, processes, or materials 
                we provide to you during our engagement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">8. Intellectual Property</h3>
              <p>
                All intellectual property rights in the materials we create for you are owned by us, unless otherwise agreed in writing. 
                We grant you a non-exclusive license to use these materials for your personal or business purposes. Our website content, 
                logo, trademarks, and other materials are protected by copyright and other intellectual property laws and may not be 
                reproduced without our permission.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">9. Investment Services</h3>
              <p className="mb-3">For clients utilizing our investment services through Sankofa Capital Partners:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All investments carry risk, including the potential loss of capital</li>
                <li>Past performance is not indicative of future results</li>
                <li>You acknowledge receiving and reviewing all relevant risk disclosures</li>
                <li>Investment decisions will be made in accordance with your investment policy statement and risk profile</li>
                <li>Specific terms of investments will be governed by relevant fund documents or investment agreements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">10. Limitation of Liability</h3>
              <p>
                To the extent permitted by law, our liability for any claim arising out of or in connection with our services is 
                limited to the amount of fees paid for the specific service giving rise to the claim. We will not be liable for any 
                indirect, special, incidental, or consequential damages, including lost profits or business opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">11. Termination</h3>
              <p>
                Either party may terminate the engagement by providing written notice in accordance with the terms specified in the 
                Client Engagement Letter. Upon termination, you agree to pay for all services rendered up to the date of termination. 
                Provisions relating to confidentiality, intellectual property, and limitation of liability will survive termination.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">12. Governing Law</h3>
              <p>
                These Terms are governed by the laws of the Republic of South Africa. Any disputes arising out of or in connection 
                with these Terms shall be subject to the exclusive jurisdiction of the courts of the Republic of South Africa.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">13. Changes to Terms</h3>
              <p>
                We may update these Terms from time to time to reflect changes in our services, business practices, or legal requirements. 
                Updated Terms will be posted on our website with an effective date. Your continued use of our services after such changes 
                constitutes acceptance of the updated Terms.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navyblue mb-3">14. Contact Information</h3>
              <p>
                If you have questions about these Terms, please contact us at:
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

export default Terms;
