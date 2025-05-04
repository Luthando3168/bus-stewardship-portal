
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface SidebarLogoutProps {
  onLogout: () => void;
  isSidebarOpen: boolean;
}

const SidebarLogout: React.FC<SidebarLogoutProps> = ({ onLogout, isSidebarOpen }) => {
  return (
    <div className="p-4 border-t border-navyblue/20">
      <Button
        variant="ghost"
        className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
        onClick={onLogout}
      >
        <LogOut size={20} />
        <span
          className={cn(
            "ml-2",
            isSidebarOpen ? "inline" : "sr-only"
          )}
        >
          Logout
        </span>
      </Button>
    </div>
  );
};

export default SidebarLogout;
