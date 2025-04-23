
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

interface RegistrationConfirmEmailProps {
  fullName: string;
  confirmationLink: string;
}

export const RegistrationConfirmEmail = ({
  fullName,
  confirmationLink,
}: RegistrationConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Complete Your MCA Direct Registration</Preview>
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
          <Heading style={h1}>Welcome to MCA Direct!</Heading>
          
          <Text style={paragraph}>
            Dear {fullName},
          </Text>
          
          <Text style={paragraph}>
            Thank you for starting your registration with Luthando Maduna Chartered Accountants. 
            To complete your registration and access our exclusive investment opportunities, 
            please click the button below:
          </Text>
          
          <Section style={buttonContainer}>
            <Link href={confirmationLink} style={button}>
              Complete Registration
            </Link>
          </Section>
          
          <Text style={paragraph}>
            If the button doesn't work, you can copy and paste this link into your browser:
            <br />
            <Link href={confirmationLink} style={link}>
              {confirmationLink}
            </Link>
          </Text>
          
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

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#1a73e8',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-block',
};

const link = {
  color: '#1a73e8',
  textDecoration: 'underline',
};

const footer = {
  color: '#666666',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '20px',
};
