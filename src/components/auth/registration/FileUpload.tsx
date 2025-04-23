
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { FileItem } from "./index";
import { toast } from "sonner";

interface FileUploadProps {
  onFileUploaded: (fileItem: FileItem) => void;
  isUploading?: boolean;
}

const FileUpload = ({ onFileUploaded, isUploading }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      setUploading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('fica-documents')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      onFileUploaded({
        name: file.name,
        path: fileName
      });

      toast.success("Document uploaded successfully");
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
