
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarToggleProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <button
      className="absolute -right-3 top-10 bg-gold text-navyblue rounded-full p-1 z-10 hidden md:block"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
};

export default SidebarToggle;
