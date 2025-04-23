
export const formatEmailTemplate = (
  template: string, 
  variables: Record<string, string>
): string => {
  return Object.entries(variables).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    template
  );
};

export const registrationApprovedTemplate = {
  subject: "Your MCA Direct Registration is Approved!",
  body: `
Dear {fullName},

Congratulations! Your registration with Luthando Maduna Chartered Accountants has been approved.

Your Client Number: {clientNumber}

Bank Account Details:
- Account Number: {bankAccountNumber}
- Branch: {bankBranchCode}

You can now log in to your dashboard and start exploring your investment opportunities.

Best regards,
Luthando Maduna Chartered Accountants Team
`
};
