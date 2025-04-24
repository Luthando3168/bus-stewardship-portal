
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const IndexRequest = () => {
  const [isRequesting, setIsRequesting] = useState(false);
  
  const requestIndexing = async () => {
    setIsRequesting(true);
    try {
      // Log the request attempt
      console.log("Requesting Google to re-index the site");
      toast.info("Requesting Google to re-index the site");
      
      // This is a frontend-only solution that helps users submit 
      // the URL to Google's indexing tools manually
      window.open(
        `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(window.location.origin)}&url=${encodeURIComponent(window.location.href)}`,
        '_blank'
      );
      
      toast.success("URL inspection tool opened. Please follow the instructions to request indexing.");
    } catch (error) {
      console.error("Error requesting indexing:", error);
      toast.error("Failed to open indexing tool. Please try manually through Google Search Console.");
    } finally {
      setIsRequesting(false);
    }
  };

  return (
    <div className="mt-4">
      <Button 
        onClick={requestIndexing} 
        disabled={isRequesting}
        className="bg-navyblue hover:bg-blue-800 text-white"
      >
        {isRequesting ? "Processing..." : "Request Google Re-indexing"}
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        This will open Google Search Console where you can request immediate indexing.
      </p>
    </div>
  );
};

export default IndexRequest;
