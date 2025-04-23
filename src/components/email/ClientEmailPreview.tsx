import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { EmailLogo, baseEmailStyles } from './BaseEmailTemplate';

const ClientEmailPreview = () => {
  const fullName = "John Doe"; // Example name
  
  return (
    <div className="max-w-3xl mx-auto my-8">
      <Card>
        <CardContent className="p-6">
          <div style={{backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}}>
            <div style={baseEmailStyles.container}>
              <EmailLogo />

              <h1 style={{color: '#1e3a8a', fontSize: '24px', fontWeight: '700', margin: '30px 0', padding: '0', textAlign: 'center'}}>
                Important Information from MCA Direct
              </h1>
              
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                Dear {fullName},
              </p>
              
              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                Thank you for being a valued client of Luthando Maduna Chartered Accountants. 
                We appreciate your trust in our services.
              </p>

              <div style={{backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '24px 0'}}>
                <h2 style={{color: '#1e3a8a', fontSize: '20px', fontWeight: '600', margin: '0 0 16px', padding: '0'}}>
                  Important Updates:
                </h2>
                <ul style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '0', paddingLeft: '20px'}}>
                  <li style={{marginBottom: '8px'}}>Your latest financial statements are ready for review</li>
                  <li style={{marginBottom: '8px'}}>New investment opportunities available</li>
                  <li style={{marginBottom: '8px'}}>Upcoming tax deadline reminders</li>
                  <li style={{marginBottom: '8px'}}>Schedule your quarterly review</li>
                </ul>
              </div>

              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', margin: '16px 0'}}>
                Please log in to your client portal to access these updates and more information.
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

              <p style={{color: '#333', fontSize: '16px', lineHeight: '1.5', marginTop: '32px', borderTop: '1px solid #e2e8f0', paddingTop: '24px'}}>
                Best regards,<br /><br />
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

export default ClientEmailPreview;
