
export const validatePassword = (password: string): { 
  isValid: boolean; 
  message: string;
  strength: 'weak' | 'medium' | 'strong';
} => {
  const minLength = 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const requirements = [
    { met: password.length >= minLength, text: "At least 12 characters" },
    { met: hasUpperCase, text: "At least one uppercase letter" },
    { met: hasLowerCase, text: "At least one lowercase letter" },
    { met: hasNumbers, text: "At least one number" },
    { met: hasSpecialChars, text: "At least one special character" }
  ];
  
  const unmetRequirements = requirements.filter(req => !req.met);
  
  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  const metCount = requirements.filter(req => req.met).length;
  
  if (metCount >= 5) {
    strength = 'strong';
  } else if (metCount >= 3) {
    strength = 'medium';
  }
  
  return {
    isValid: unmetRequirements.length === 0,
    message: unmetRequirements.length > 0 
      ? `Password must include: ${unmetRequirements.map(r => r.text).join(', ')}`
      : 'Password meets all requirements',
    strength
  };
};
