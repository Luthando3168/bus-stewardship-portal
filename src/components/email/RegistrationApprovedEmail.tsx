
import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components';

interface RegistrationApprovedEmailProps {
  fullName: string;
  clientNumber: string;
  bankAccountNumber?: string;
  bankAccountBranch?: string;
}

export const RegistrationApprovedEmail = ({
  fullName,
  clientNumber,
  bankAccountNumber,
  bankAccountBranch,
}: RegistrationApprovedEmailProps) => (
  <Html>
    <Head />
    <Preview>Your MCA Direct Registration is Approved!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src="/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png"
            alt="Luthando Maduna Chartered Accountants"
            style={logo}
          />
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>Welcome to MCA Direct, {fullName}!</Heading>
          
          <Text style={paragraph}>
            Congratulations! Your registration with Luthando Maduna Chartered Accountants has been approved.
          </Text>
          
          <Section style={details}>
            <Text style={detailText}>Client Number: {clientNumber}</Text>
            
            {bankAccountNumber && (
              <>
                <Text style={detailText}>Bank Account Details:</Text>
                <Text style={detailText}>
                  Account Number: {bankAccountNumber}
                  <br />
                  Branch: {bankAccountBranch}
                </Text>
              </>
            )}
          </Section>
          
          <Text style={paragraph}>
            You can now log in to your dashboard and start exploring your investment opportunities.
          </Text>
          
          <Section style={buttonContainer}>
            <Link href="https://www.madunacas.com/login" style={button}>
              Login to Dashboard
            </Link>
          </Section>
          
          <Text style={footer}>
            © {new Date().getFullYear()} Luthando Maduna Chartered Accountants. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f4f4f4',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '100%',
  maxWidth: '600px',
};

const logoContainer = {
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const logo = {
  maxWidth: '200px',
  margin: '0 auto',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const h1 = {
  color: '#1a73e8',
  fontSize: '24px',
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
};

const details = {
  backgroundColor: '#f9f9f9',
  padding: '15px',
  borderRadius: '4px',
  marginBottom: '20px',
};

const detailText = {
  margin: '5px 0',
  fontSize: '14px',
  color: '#666666',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '20px',
};

const button = {
  backgroundColor: '#1a73e8',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footer = {
  color: '#666666',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '20px',
};

export default RegistrationApprovedEmail;
