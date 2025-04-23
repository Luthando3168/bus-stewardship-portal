import React from 'npm:react@18.3.1';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Img,
} from 'npm:@react-email/components@0.0.12';

interface WelcomeEmailProps {
  fullName: string;
  verificationUrl?: string;
}

export const WelcomeEmail = ({
  fullName,
  verificationUrl = "https://mcadirect.madunacas.com/verify",
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Luthando Maduna Chartered Accountants</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src="https://lovable.app/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png"
            width="250"
            height="auto"
            alt="Luthando Maduna Chartered Accountants"
            style={{ margin: '0 auto' }}
          />
        </Section>

        <Heading style={h1}>Welcome to Luthando Maduna Chartered Accountants (MCA Direct)!</Heading>
        
        <Text style={text}>Dear {fullName},</Text>
        
        <Text style={text}>
          I am Luthando Maduna, CA(SA), Director of the firm. On behalf of our entire team, 
          I extend a warm welcome to you as you begin your journey with us.
        </Text>

        <Section style={buttonContainer}>
          <Link
            href={verificationUrl}
            style={button}
          >
            Verify Your Email
          </Link>
        </Section>

        <Text style={text}>
          After verifying your email, you'll gain access to:
        </Text>

        <ul style={list}>
          <li style={listItem}>Professional business management services</li>
          <li style={listItem}>Investment opportunities</li>
          <li style={listItem}>Financial advisory services</li>
          <li style={listItem}>Your personalized MCA Direct dashboard</li>
        </ul>

        <Heading style={h2}>About MCA Direct:</Heading>
        <Text style={text}>
          We specialize in assisting individuals like you to own and grow successful businesses. 
          Our mission is to guide you every step of the way—from the initial registration all 
          the way through to becoming a fully supported client with access to unique business 
          opportunities and expert advice.
        </Text>

        <Heading style={h2}>What Happens Next:</Heading>
        <Text style={text}>
          • Please confirm your email by clicking the verification link sent to your inbox.<br />
          • After confirmation, you will receive a detailed guide to complete your full client registration.<br />
          • Our team will review your submitted information and may reach out if further documentation is needed.<br />
          • Once approved, you will gain full access to our tailored services and investment opportunities.
        </Text>

        <Heading style={h2}>Our Commitment:</Heading>
        <Text style={text}>
          We understand the importance of trust and transparency. We are dedicated to protecting 
          your information and ensuring you feel confident throughout this process.
        </Text>

        <Section style={contactSection}>
          <Heading style={h2}>Contact Us:</Heading>
          <Text style={contactText}>
            Email: <Link href="mailto:info@madunacas.com" style={link}>info@madunacas.com</Link><br />
            Mobile: 062 019 3208<br />
            SAICA Number: 20055210<br />
            Address: 28 Beacon Avenue, Linbro Park AH, Sandton, 2065
          </Text>
        </Section>

        <Text style={text}>We look forward to partnering with you on your business journey.</Text>
        
        <Text style={signature}>
          Warm regards,<br /><br />
          Luthando Maduna, CA(SA)<br />
          Director, Luthando Maduna Chartered Accountants
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
}

const logoContainer = {
  textAlign: 'center' as const,
  padding: '20px 0',
  marginBottom: '24px',
}

const h1 = {
  color: '#1e3a8a',
  fontSize: '24px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#1e3a8a',
  fontSize: '20px',
  fontWeight: '600',
  margin: '26px 0 8px',
  padding: '0',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '16px 0',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#1e3a8a',
  borderRadius: '4px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  padding: '12px 24px',
  textDecoration: 'none',
  textAlign: 'center' as const,
}

const list = {
  margin: '16px 0',
  padding: '0 0 0 24px',
}

const listItem = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '8px',
}

const contactSection = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '8px',
  margin: '24px 0',
}

const contactText = {
  ...text,
  margin: '8px 0',
}

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
}

const signature = {
  ...text,
  marginTop: '32px',
  borderTop: '1px solid #e2e8f0',
  paddingTop: '24px',
}
