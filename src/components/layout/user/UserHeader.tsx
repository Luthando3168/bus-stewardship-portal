
import { Bell, Menu, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com/Lifestylefarmsclub",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/LMCA_ZA",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/luthando-isaac-maduna-87267257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
  },
];

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

interface UserHeaderProps {
  notifications: Notification[];
  isMobile?: boolean;
  onMenuClick?: () => void;
  userName?: string;
}

const UserHeader = ({ 
  notifications, 
  isMobile = false, 
  onMenuClick, 
  userName = "Client" 
}: UserHeaderProps) => {
  return (
    <header className="bg-white shadow-sm p-3 md:p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="mr-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center">
            <Link to="/" className="flex items-start group cursor-pointer">
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg tracking-tight">
                  <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
                  <span className="text-navyblue ml-1"> Maduna</span>
                </span>
                <span className="font-montserrat text-xs text-navyblue tracking-wider mt-1">
                  CHARTERED ACCOUNTANTS
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-navyblue hover:text-gold transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px] max-w-[95vw]">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="p-3">
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {notification.message}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {notification.time}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem className="p-3 text-center">
                    No new notifications
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild className="p-2 justify-center border-t">
                  <Link to="/user/notifications" className="w-full text-center text-sm text-blue-600">
                    View all
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col items-end md:flex-row md:items-center md:gap-4">
            <a
              href="mailto:info@madunacas.com"
              className="text-xs text-navyblue hover:underline"
            >
              info@madunacas.com
            </a>
            <span className="text-xs text-navyblue hidden md:inline">|</span>
            <span className="text-xs text-navyblue">062 019 3208</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
