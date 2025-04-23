
import { toast } from "sonner";

// Define notification types for consistent messaging
export type NotificationType = 
  | 'welcome'
  | 'profile_update'
  | 'deal_approved'
  | 'deal_pending'
  | 'deal_completed'
  | 'new_opportunity'
  | 'document_uploaded'
  | 'password_reset';

// Define notification channels
export type NotificationChannel = 'email' | 'whatsapp' | 'sms' | 'in_app';

// Define notification template structure
interface NotificationTemplate {
  subject: string;
  body: string;
  whatsappBody?: string;
}

// Define notification recipient
export interface NotificationRecipient {
  fullName: string;
  email: string;
  phone?: string;
}

// Template library for all notifications
const templates: Record<NotificationType, NotificationTemplate> = {
  welcome: {
    subject: "Welcome to Luthando Maduna Chartered Accountants",
    body: `
      <p>Dear {fullName},</p>
      <p>Welcome to Luthando Maduna Chartered Accountants! Your account has been created successfully.</p>
      <p>You can now log in to access your investment opportunities and manage your portfolio.</p>
      <p>Please complete your profile information to get personalized investment recommendations.</p>
      <p>If you need any assistance, please don't hesitate to contact our support team.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Welcome to Luthando Maduna Chartered Accountants, {fullName}! Your account has been created successfully. You can now log in to access your investment opportunities and manage your portfolio."
  },
  profile_update: {
    subject: "Your MCA Profile Has Been Updated",
    body: `
      <p>Dear {fullName},</p>
      <p>This is to confirm that your profile information has been updated.</p>
      <p>If you did not make these changes, please contact our support team immediately.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Hello {fullName}, your MCA profile has been updated. If you did not make these changes, please contact our support team immediately."
  },
  deal_approved: {
    subject: "Your Investment Has Been Approved",
    body: `
      <p>Dear {fullName},</p>
      <p>Great news! Your investment in {dealName} has been approved.</p>
      <p>You can view the details in your investment dashboard.</p>
      <p>Thank you for investing with MCA.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Good news, {fullName}! Your investment in {dealName} has been approved. You can view the details in your investment dashboard."
  },
  deal_pending: {
    subject: "Your Investment is Pending",
    body: `
      <p>Dear {fullName},</p>
      <p>Your investment in {dealName} is currently pending approval.</p>
      <p>You will be notified once the approval process is complete.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Hello {fullName}, your investment in {dealName} is currently pending approval. You will be notified once the approval process is complete."
  },
  deal_completed: {
    subject: "Investment Deal Completed",
    body: `
      <p>Dear {fullName},</p>
      <p>Congratulations! The investment deal {dealName} has been successfully completed.</p>
      <p>You can view the details and documents in your investment dashboard.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Congratulations, {fullName}! The investment deal {dealName} has been successfully completed. You can view the details and documents in your investment dashboard."
  },
  new_opportunity: {
    subject: "New Investment Opportunity Available",
    body: `
      <p>Dear {fullName},</p>
      <p>We have a new investment opportunity that might interest you: {dealName}.</p>
      <p>Log in to your dashboard to learn more and invest.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Hello {fullName}, we have a new investment opportunity that might interest you: {dealName}. Log in to your dashboard to learn more and invest."
  },
  document_uploaded: {
    subject: "New Document Available",
    body: `
      <p>Dear {fullName},</p>
      <p>A new document ({documentName}) has been uploaded to your account.</p>
      <p>Log in to your dashboard to view and download it.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Hello {fullName}, a new document ({documentName}) has been uploaded to your account. Log in to your dashboard to view and download it."
  },
  password_reset: {
    subject: "Password Reset Request",
    body: `
      <p>Dear {fullName},</p>
      <p>We received a request to reset your password. Click the link below to set a new password:</p>
      <p><a href="{resetLink}">Reset Password</a></p>
      <p>If you did not request this change, please ignore this email or contact our support team.</p>
      <p>Best regards,<br>The MCA Team</p>
    `,
    whatsappBody: "Hello {fullName}, we received a request to reset your password. Please check your email for instructions or contact our support team if you did not request this change."
  },
};

// Process template variables
const processTemplate = (template: string, variables: Record<string, string>): string => {
  let processedTemplate = template;
  
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{${key}}`, 'g');
    processedTemplate = processedTemplate.replace(regex, value);
  });
  
  return processedTemplate;
};

// Send email notification
export const sendEmailNotification = async (
  recipient: NotificationRecipient,
  type: NotificationType,
  variables: Record<string, string> = {},
  attachments: string[] = []
): Promise<boolean> => {
  try {
    if (!recipient.email) {
      console.error("Email address is required");
      return false;
    }

    const template = templates[type];
    const subject = template.subject;
    const body = processTemplate(template.body, {
      fullName: recipient.fullName,
      ...variables
    });

    // In a real app, this would connect to an email service API
    console.log(`Sending email to ${recipient.email}:`, { subject, body, attachments });
    
    // Simulate API call
    const response = await new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });

    return response;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
};

// Send WhatsApp notification
export const sendWhatsAppNotification = async (
  recipient: NotificationRecipient,
  type: NotificationType,
  variables: Record<string, string> = {}
): Promise<boolean> => {
  try {
    if (!recipient.phone) {
      console.error("Phone number is required for WhatsApp notification");
      return false;
    }

    const template = templates[type];
    if (!template.whatsappBody) {
      console.error("WhatsApp template not found for this notification type");
      return false;
    }

    const message = processTemplate(template.whatsappBody, {
      fullName: recipient.fullName,
      ...variables
    });

    // In a real app, this would connect to WhatsApp Business API
    console.log(`Sending WhatsApp to ${recipient.phone}:`, message);
    
    // Simulate API call
    const response = await new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });

    return response;
  } catch (error) {
    console.error("Failed to send WhatsApp notification:", error);
    return false;
  }
};

// Multi-channel notification
export const sendNotification = async (
  recipient: NotificationRecipient,
  type: NotificationType,
  channels: NotificationChannel[] = ['email'],
  variables: Record<string, string> = {},
  attachments: string[] = []
): Promise<{success: boolean, channels: {[key in NotificationChannel]?: boolean}}> => {
  const results: {[key in NotificationChannel]?: boolean} = {};
  
  try {
    // Send notifications through all requested channels
    await Promise.all(channels.map(async (channel) => {
      switch (channel) {
        case 'email':
          results.email = await sendEmailNotification(recipient, type, variables, attachments);
          break;
        case 'whatsapp':
          results.whatsapp = await sendWhatsAppNotification(recipient, type, variables);
          break;
        case 'in_app':
          // In-app notification would be handled by a separate system
          results.in_app = true;
          break;
        case 'sms':
          // SMS implementation would be similar to WhatsApp
          results.sms = false; // Not implemented yet
          break;
      }
    }));

    // Consider notification successful if at least one channel succeeded
    const success = Object.values(results).some(result => result === true);
    
    if (success) {
      toast.success(`Notification sent successfully`);
    } else {
      toast.error(`Failed to send notification`);
    }

    return { success, channels: results };
  } catch (error) {
    console.error("Failed to send notification:", error);
    toast.error(`Failed to send notification: ${error}`);
    return { success: false, channels: results };
  }
};

// Bulk send notifications (for admin use)
export const sendBulkNotifications = async (
  recipients: NotificationRecipient[],
  type: NotificationType,
  channels: NotificationChannel[] = ['email'],
  variables: Record<string, string> = {}
): Promise<{success: boolean, total: number, successful: number}> => {
  let successful = 0;
  
  try {
    await Promise.all(
      recipients.map(async (recipient) => {
        const result = await sendNotification(recipient, type, channels, variables);
        if (result.success) successful++;
      })
    );
    
    const success = successful > 0;
    if (success) {
      toast.success(`Sent notifications to ${successful}/${recipients.length} recipients`);
    } else {
      toast.error(`Failed to send notifications`);
    }
    
    return { success, total: recipients.length, successful };
  } catch (error) {
    console.error("Failed to send bulk notifications:", error);
    toast.error(`Failed to send bulk notifications: ${error}`);
    return { success: false, total: recipients.length, successful };
  }
};
