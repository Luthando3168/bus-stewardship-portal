
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarHeaderProps {
  isSidebarOpen: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isSidebarOpen }) => {
  // Read the client number from localStorage
  const clientNumber = localStorage.getItem("clientNumber") || "N/A";

  return (
    <div className="p-4 border-b border-navyblue/20">
      <div
        className={cn(
          "font-bold text-xl transition-all",
          isSidebarOpen ? "opacity-100" : "opacity-0"
        )}
      >
        MCA Direct
      </div>
      {/* Show client number under MCA Direct only when expanded */}
      {isSidebarOpen && (
        <div className="text-xs mt-1 text-gray-200 font-mono">
          Client Number: <span className="font-semibold">{clientNumber}</span>
        </div>
      )}
      {!isSidebarOpen && <div className="text-xl font-bold text-center">MCA</div>}
    </div>
  );
};

export default SidebarHeader;
