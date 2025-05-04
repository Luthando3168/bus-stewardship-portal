
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarProfileProps {
  userName: string;
  isSidebarOpen: boolean;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ userName, isSidebarOpen }) => {
  return (
    <div className="p-4 border-b border-navyblue/20">
      <div
        className={cn(
          "transition-all",
          isSidebarOpen ? "block" : "hidden"
        )}
      >
        <p className="text-sm text-gray-300">Welcome,</p>
        <p className="font-semibold truncate">{userName}</p>
      </div>
      {!isSidebarOpen && (
        <div className="flex justify-center">
          <div className="h-8 w-8 rounded-full bg-gold text-navyblue flex items-center justify-center font-bold">
            {userName.charAt(0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
