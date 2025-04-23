
import React from 'react';
import { baseEmailStyles, EmailLogo } from './BaseEmailTemplate';

interface RegistrationApprovedEmailProps {
  fullName: string;
  clientNumber: string;
  bankAccountNumber?: string;
  bankAccountBranch?: string;
}

export const RegistrationApprovedEmail = ({
  fullName,
  clientNumber,
  bankAccountNumber = "123456789",
  bankAccountBranch = "Universal Branch 123"
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
          
          <p style={{
            color: '#333333',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px'
          }}>
            If you have any questions or need assistance, please don't hesitate to contact our support team.
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
          © {new Date().getFullYear()} Luthando Maduna Chartered Accountants. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default RegistrationApprovedEmail;
