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

interface DealApprovalEmailProps {
  fullName: string;
  dealName: string;
  investmentAmount: string;
  approvalLink: string;
}

export const DealApprovalEmail = ({
  fullName,
  dealName,
  investmentAmount,
  approvalLink,
}: DealApprovalEmailProps) => (
  <Html>
    <Head />
    <Preview>Your MCA Direct Investment is Ready for Approval</Preview>
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
          <Heading style={h1}>Investment Ready for Approval</Heading>
          
          <Text style={paragraph}>
            Dear {fullName},
          </Text>
          
          <Text style={paragraph}>
            Your investment in {dealName} for R{investmentAmount} is now fully funded 
            and all documents have been processed. Please review and approve your 
            shareholder registration by clicking the button below:
          </Text>
          
          <Section style={buttonContainer}>
            <Link href={approvalLink} style={button}>
              Review and Approve
            </Link>
          </Section>
          
          <Text style={paragraph}>
            After approval, you will be registered as a shareholder and receive your 
            official share certificate.
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
