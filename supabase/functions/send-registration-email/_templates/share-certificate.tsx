import React from 'npm:react@18.3.1';
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
} from 'npm:@react-email/components@0.0.12';

interface ShareCertificateEmailProps {
  fullName: string;
  dealName: string;
  certificateNumber: string;
  viewLink: string;
}

export const ShareCertificateEmail = ({
  fullName,
  dealName,
  certificateNumber,
  viewLink,
}: ShareCertificateEmailProps) => (
  <Html>
    <Head />
    <Preview>Your MCA Direct Share Certificate is Ready</Preview>
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
          <Heading style={h1}>Share Certificate Generated</Heading>
          
          <Text style={paragraph}>
            Dear {fullName},
          </Text>
          
          <Text style={paragraph}>
            Your share certificate for {dealName} has been generated successfully. 
            Certificate Number: {certificateNumber}
          </Text>
          
          <Section style={buttonContainer}>
            <Link href={viewLink} style={button}>
              View Share Certificate
            </Link>
          </Section>
          
          <Text style={paragraph}>
            You can access your share certificate at any time through the My Investments 
            section of your MCA Direct dashboard.
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

const footer = {
  color: '#666666',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '20px',
};
