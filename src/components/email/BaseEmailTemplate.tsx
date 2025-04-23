
import React from 'react';

export const baseEmailStyles = {
  main: {
    backgroundColor: '#f4f4f4',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '100%',
    maxWidth: '600px',
  },
  logoContainer: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  logo: {
    maxWidth: '250px',
    margin: '0 auto',
  }
};

export const EmailLogo = () => (
  <div style={baseEmailStyles.logoContainer}>
    <img 
      src="/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png" 
      alt="Luthando Maduna Chartered Accountants" 
      style={baseEmailStyles.logo}
    />
  </div>
);
