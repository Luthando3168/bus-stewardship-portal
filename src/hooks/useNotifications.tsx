
import { useCallback } from "react";
import { 
  sendNotification, 
  NotificationType, 
  NotificationChannel,
  NotificationRecipient
} from "@/utils/notificationService";

export const useNotifications = () => {
  const sendUserNotification = useCallback(
    async (
      user: { fullName: string; email: string; phone?: string },
      type: NotificationType,
      channels: NotificationChannel[] = ["email"],
      variables: Record<string, string> = {}
    ) => {
      const recipient: NotificationRecipient = {
        fullName: user.fullName,
        email: user.email,
        phone: user.phone
      };

      return await sendNotification(recipient, type, channels, variables);
    },
    []
  );

  const notifyProfileUpdate = useCallback(
    async (user: { fullName: string; email: string; phone?: string }) => {
      return sendUserNotification(user, "profile_update", ["email"]);
    },
    [sendUserNotification]
  );

  const notifyDealStatus = useCallback(
    async (
      user: { fullName: string; email: string; phone?: string },
      status: "pending" | "approved" | "completed",
      dealName: string
    ) => {
      const notificationType = 
        status === "pending" ? "deal_pending" : 
        status === "approved" ? "deal_approved" : 
        "deal_completed";
      
      const channels: NotificationChannel[] = ["email"];
      if (user.phone) channels.push("whatsapp");
      
      return sendUserNotification(
        user,
        notificationType,
        channels,
        { dealName }
      );
    },
    [sendUserNotification]
  );

  return {
    sendUserNotification,
    notifyProfileUpdate,
    notifyDealStatus
  };
};
