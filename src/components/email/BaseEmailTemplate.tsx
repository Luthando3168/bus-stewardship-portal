
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
  },
  networkMemberText: {
    textAlign: 'center' as const,
    color: '#666666',
    fontSize: '12px',
    marginTop: '10px',
  }
};

export const EmailLogo = () => (
  <div style={baseEmailStyles.logoContainer}>
    <img 
      src="/lovable-uploads/c1492a4e-ca1c-4b86-866c-2945f7178765.png" 
      alt="Chartered Accountants Worldwide" 
      style={baseEmailStyles.logo}
    />
    <div style={baseEmailStyles.networkMemberText}>
      Network Member
    </div>
  </div>
);
