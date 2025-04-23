
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Step, FileUpload, FileItem, FormProgress } from "./registration";

const CompleteRegistration = () => {
  const [step, setStep] = useState<Step>("PERSONAL");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      idNumber: "",
      nationality: "",
      taxNumber: "",
      taxCountry: "",
      address: "",
      postalCode: "",
      city: "",
      province: "",
      sourceOfFunds: "",
      employmentStatus: "",
      occupation: "",
      employer: "",
      riskProfile: "",
      incomeBracket: "",
      pep: "no"
    }
  });

  const onSubmit = async (data: any) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error: clientError } = await supabase
        .from('clients')
        .update({
          ...data,
          pep: data.pep === "yes",
          status: 'pending_documents'
        })
        .eq('id', user.id);

      if (clientError) throw clientError;

      setStep("DOCUMENTS");
      toast.success("Personal information saved successfully");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('fica-documents')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: docError } = await supabase
        .from('client_documents')
        .insert({
          client_id: user.id,
          document_type: file.type,
          document_path: fileName,
        });

      if (docError) throw docError;

      setUploadedFiles(prev => [...prev, { name: file.name, path: fileName }]);
      toast.success("Document uploaded successfully");
    } catch (error: any) {
      console.error("Error uploading document:", error);
      toast.error(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleComplete = async () => {
    try {
      if (!acceptedTerms) {
        toast.error("Please accept the terms and conditions");
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from('clients')
        .update({
          status: 'pending_approval',
          documents_submitted: true
        })
        .eq('id', user.id);

      if (error) throw error;

      toast.success("Registration completed successfully");
      navigate("/user/dashboard");
    } catch (error: any) {
      console.error("Error completing registration:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
      <Card className="w-full max-w-3xl border-gold shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-navyblue">Complete Your Registration</CardTitle>
          <CardDescription>Please provide all required information to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <FormProgress currentStep={step} />
          
          {step === "PERSONAL" && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="fullName"
                    control={form.control}
                    rules={{ required: "Full name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Add all other form fields similarly */}
                </div>
                <Button type="submit" className="w-full">Continue to Documents</Button>
              </form>
            </Form>
          )}

          {step === "DOCUMENTS" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border-2 border-dashed rounded-lg">
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                    disabled={isUploading}
                  />
                </div>
                
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I accept the terms and conditions and confirm that all provided information is accurate
                </Label>
              </div>

              <Button
                onClick={handleComplete}
                disabled={uploadedFiles.length === 0 || !acceptedTerms}
                className="w-full"
              >
                Complete Registration
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompleteRegistration;
