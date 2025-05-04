
import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Import the new sidebar components
import SidebarLinks from "./sidebar/SidebarLinks";
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarProfile from "./sidebar/SidebarProfile";
import SidebarLogout from "./sidebar/SidebarLogout";
import SidebarToggle from "./sidebar/SidebarToggle";

interface UserSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  userName: string;
  onLogout: () => void;
}

const UserSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  userName,
  onLogout,
}: UserSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "min-h-screen bg-navyblue text-white transition-all duration-300 ease-in-out flex flex-col relative",
        isSidebarOpen ? "w-64" : "w-20"
      )}
    >
      <SidebarToggle 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <SidebarHeader isSidebarOpen={isSidebarOpen} />
      <SidebarProfile userName={userName} isSidebarOpen={isSidebarOpen} />
      <SidebarLinks isSidebarOpen={isSidebarOpen} />
      <SidebarLogout onLogout={onLogout} isSidebarOpen={isSidebarOpen} />
    </aside>
  );
};

export default UserSidebar;
