
import React from 'react';
import { baseEmailStyles, EmailLogo } from './BaseEmailTemplate';

interface RegistrationApprovedEmailProps {
  fullName: string;
  clientNumber: string;
  bankAccountNumber?: string;
  bankAccountBranch?: string;
  dashboardLink?: string;
  supportLink?: string;
}

export const RegistrationApprovedEmail = ({
  fullName,
  clientNumber,
  bankAccountNumber = "123456789",
  bankAccountBranch = "Universal Branch 123",
  dashboardLink = "/user/dashboard",
  supportLink = "/contact"
}: RegistrationApprovedEmailProps) => {
  return (
    <div style={baseEmailStyles.main}>
      <div style={baseEmailStyles.container}>
        <EmailLogo />
        
        <div style={{
          backgroundColor: '#ffffff',
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{
            color: '#1a73e8',
            fontSize: '24px',
            marginBottom: '24px',
            fontWeight: 'bold'
          }}>
            Welcome to MCA Direct, {fullName}!
          </h1>
          
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px'
          }}>
            Congratulations! Your registration with Luthando Maduna Chartered Accountants has been approved. 
            All your documents have been verified and validated successfully.
          </p>
          
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '6px',
            marginBottom: '24px'
          }}>
            <p style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              color: '#333333'
            }}>
              <strong>Your Client Number:</strong> {clientNumber}
            </p>
            
            <p style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              color: '#333333'
            }}>
              <strong>Third Party Fund Administration Bank Account Details:</strong><br />
              Account Number: {bankAccountNumber}<br />
              Branch Code: {bankAccountBranch}
            </p>

            <p style={{
              margin: '0',
              fontSize: '16px',
              color: '#333333'
            }}>
              <strong>Important:</strong> Please reference your client number when making any deposits or transactions.
            </p>
          </div>
          
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px'
          }}>
            Your investment journey with us begins now. Our team is dedicated to helping you achieve your financial goals, 
            and we look forward to a prosperous partnership.
          </p>

          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <a href={dashboardLink} style={{
              backgroundColor: '#1a73e8',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold'
            }}>
              Access Your Dashboard
            </a>
          </div>
          
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px'
          }}>
            If you have any questions or need assistance, please don't hesitate to <a href={supportLink} style={{
              color: '#1a73e8',
              textDecoration: 'underline'
            }}>contact our support team</a>.
          </p>
          
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            Best regards,<br />
            The MCA Team
          </p>
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          color: '#666666',
          fontSize: '12px'
        }}>
          © {new Date().getFullYear()} Luthando Maduna Chartered Accountants. All rights reserved.<br />
          <a href="/privacy" style={{
            color: '#666666',
            textDecoration: 'underline'
          }}>Privacy Policy</a> | <a href="/terms" style={{
            color: '#666666',
            textDecoration: 'underline'
          }}>Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationApprovedEmail;
