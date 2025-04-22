
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

interface UserHeaderProps {
  notifications: Notification[];
}

const UserHeader = ({ notifications }: UserHeaderProps) => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-navyblue">
          Client Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              {notifications.map((notification) => (
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
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
