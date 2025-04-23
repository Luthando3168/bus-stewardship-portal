
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WelcomeEmailPreview = () => {
  const fullName = "John Doe"; // Example name
  
  // This HTML structure mirrors the welcome.tsx template structure
  return (
    <div className="max-w-3xl mx-auto my-8">
      <Card>
        <CardContent className="p-6">
          <div style={{backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}}>
            <div style={{margin: '0 auto', padding: '20px 0 48px', maxWidth: '600px'}}>
              <div style={{textAlign: 'center', padding: '20px 0'}}>
                <img
                  src="https://lovable.app/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png"
                  width="200"
                  height="auto"
                  alt="Luthando Maduna CA Logo"
                />
              </div>

              <h1 style={{color: '#1e3a8a', fontSize: '24px', fontWeight: '700', margin: '30px 0', padding: '0', textAlign: 'center'}}>
                Welcome to Luthando Maduna Chartered Accountants (MCA Direct)!
              </h1>
              
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                Dear {fullName},
              </p>
              
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                I am Luthando Maduna, CA(SA), Director of the firm. On behalf of our entire team, 
                I extend a warm welcome to you as you begin your journey with us.
              </p>

              <h2 style={{color: '#1e3a8a', fontSize: '20px', fontWeight: '600', margin: '26px 0 8px', padding: '0'}}>
                About MCA Direct:
              </h2>
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                We specialize in assisting individuals like you to own and grow successful businesses. 
                Our mission is to guide you every step of the way—from the initial registration all 
                the way through to becoming a fully supported client with access to unique business 
                opportunities and expert advice.
              </p>

              <h2 style={{color: '#1e3a8a', fontSize: '20px', fontWeight: '600', margin: '26px 0 8px', padding: '0'}}>
                What Happens Next:
              </h2>
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                • Please confirm your email by clicking the verification link sent to your inbox.<br />
                • After confirmation, you will receive a detailed guide to complete your full client registration.<br />
                • Our team will review your submitted information and may reach out if further documentation is needed.<br />
                • Once approved, you will gain full access to our tailored services and investment opportunities.
              </p>

              <h2 style={{color: '#1e3a8a', fontSize: '20px', fontWeight: '600', margin: '26px 0 8px', padding: '0'}}>
                Our Commitment:
              </h2>
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                We understand the importance of trust and transparency. We are dedicated to protecting 
                your information and ensuring you feel confident throughout this process.
              </p>

              <div style={{backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '24px 0'}}>
                <h2 style={{color: '#1e3a8a', fontSize: '20px', fontWeight: '600', margin: '26px 0 8px', padding: '0'}}>
                  Contact Us:
                </h2>
                <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '8px 0'}}>
                  Email: <a href="mailto:info@madunacas.com" style={{color: '#2563eb', textDecoration: 'underline'}}>info@madunacas.com</a><br />
                  Mobile: 062 019 3208<br />
                  SAICA Number: 20055210<br />
                  Address: 28 Beacon Avenue, Linbro Park AH, Sandton, 2065
                </p>
              </div>

              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                We look forward to partnering with you on your business journey.
              </p>
              
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', marginTop: '32px', borderTop: '1px solid #e2e8f0', paddingTop: '24px'}}>
                Warm regards,<br /><br />
                Luthando Maduna, CA(SA)<br />
                Director, Luthando Maduna Chartered Accountants
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeEmailPreview;
