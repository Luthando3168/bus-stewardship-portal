
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FileUploadProps {
  onFileUploaded: (file: File) => Promise<void>;
  isUploading?: boolean;
}

const FileUpload = ({ onFileUploaded, isUploading }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      setUploading(true);
      await onFileUploaded(file);
    } catch (error: any) {
      console.error("Error uploading document:", error);
      toast.error(error.message || "Error uploading document");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={handleFileUpload}
        disabled={uploading || isUploading}
        className="hidden"
        id="file-upload"
      />
      <Button 
        asChild
        variant="outline"
        disabled={uploading || isUploading}
        className="w-full"
      >
        <label htmlFor="file-upload" className="cursor-pointer">
          {uploading ? "Uploading..." : "Upload Document"}
        </label>
      </Button>
    </div>
  );
};

export default FileUpload;
