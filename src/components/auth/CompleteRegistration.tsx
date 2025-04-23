
import { useState, useEffect } from "react";
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
import { Loader } from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";
import Logo from "@/components/ui/Logo";

const CompleteRegistration = () => {
  const [step, setStep] = useState<Step>("PERSONAL");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<{id: string, email: string, fullName: string} | null>(null);
  const navigate = useNavigate();
  const { sendUserNotification } = useNotifications();

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

  // Load user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast.error("No user found. Please log in first.");
          navigate('/login');
          return;
        }

        // Try to get client information
        const { data: client, error } = await supabase
          .from('clients')
          .select('*')
          .eq('id', user.id)
          .single();

        if (!error && client) {
          // Populate form with existing data
          form.reset({
            fullName: user.user_metadata?.full_name || "",
            email: user.email || "",
            phone: client.phone || "",
            dob: client.dob || "",
            idNumber: client.id_number || "",
            nationality: client.nationality || "",
            taxNumber: client.tax_number || "",
            taxCountry: client.tax_country || "",
            address: client.address || "",
            postalCode: client.postal_code || "",
            city: client.city || "",
            province: client.province || "",
            sourceOfFunds: client.source_of_funds || "",
            employmentStatus: client.employment_status || "",
            occupation: client.occupation || "",
            employer: client.employer || "",
            riskProfile: client.risk_profile || "",
            incomeBracket: client.income_bracket || "",
            pep: client.pep ? "yes" : "no"
          });

          // If they've already submitted personal info, go to documents step
          if (client.status === 'verification_pending') {
            setStep("DOCUMENTS");
          }
        }

        // Store user data for later use
        setUserData({
          id: user.id,
          email: user.email || "",
          fullName: user.user_metadata?.full_name || "User"
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Error loading your profile data");
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate, form]);

  const onSubmit = async (data: any) => {
    try {
      if (!userData) {
        toast.error("User data not available");
        return;
      }

      setIsLoading(true);
      const { error: clientError } = await supabase
        .from('clients')
        .update({
          ...data,
          pep: data.pep === "yes",
          status: 'verification_pending',
          full_name: data.fullName,
          email: data.email,
          phone: data.phone
        })
        .eq('id', userData.id);

      if (clientError) throw clientError;

      // Store name in localStorage
      localStorage.setItem("userName", data.fullName.split(' ')[0] || "");
      localStorage.setItem("userSurname", data.fullName.split(' ').slice(1).join(' ') || "");

      setStep("DOCUMENTS");
      toast.success("Personal information saved successfully");
      
      // Send notification about profile update
      await sendUserNotification(
        { 
          fullName: data.fullName, 
          email: data.email,
          phone: data.phone 
        }, 
        'profile_update', 
        ['email']
      );
      
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Error updating profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!userData?.id) {
      toast.error("User data not available");
      return;
    }
    
    try {
      setIsUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${userData.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('fica-documents')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: docError } = await supabase
        .from('client_documents')
        .insert({
          client_id: userData.id,
          document_type: file.name.includes("ID") ? "identification" : 
                        file.name.includes("proof") ? "proof_of_address" : 
                        "supporting_document",
          document_path: fileName,
          document_name: file.name
        });

      if (docError) throw docError;

      setUploadedFiles(prev => [...prev, { name: file.name, path: fileName }]);
      toast.success("Document uploaded successfully");
    } catch (error: any) {
      console.error("Error uploading document:", error);
      toast.error(error.message || "Error uploading document");
    } finally {
      setIsUploading(false);
    }
  };

  const handleComplete = async () => {
    try {
      if (!userData?.id) {
        toast.error("User data not available");
        return;
      }
      
      if (!acceptedTerms) {
        toast.error("Please accept the terms and conditions");
        return;
      }

      if (uploadedFiles.length === 0) {
        toast.error("Please upload at least one document");
        return;
      }

      setIsLoading(true);
      const { error } = await supabase
        .from('clients')
        .update({
          status: 'pending_approval',
          documents_submitted: true
        })
        .eq('id', userData.id);

      if (error) throw error;

      // Send notification to the admin about new registration
      // (This would typically be handled by a database trigger or edge function)
      
      toast.success("Registration completed successfully! Your account will be reviewed by our team.");
      
      // Generate a client number (typically this would be done by admin during approval)
      const year = new Date().getFullYear();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const clientNumber = `LM${year}${randomNum}`;
      localStorage.setItem("clientNumber", clientNumber);
      
      setTimeout(() => {
        navigate("/user/dashboard");
      }, 2000);
    } catch (error: any) {
      console.error("Error completing registration:", error);
      toast.error(error.message || "Error completing registration");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-white mx-auto mb-4" />
          <p className="text-white">Loading registration form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
      <Card className="w-full max-w-3xl border-gold shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
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
                  <FormField
                    name="email"
                    control={form.control}
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phone"
                    control={form.control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="idNumber"
                    control={form.control}
                    rules={{ required: "ID number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="address"
                    control={form.control}
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="city"
                    control={form.control}
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-lightgold"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Continue to Documents"}
                </Button>
              </form>
            </Form>
          )}

          {step === "DOCUMENTS" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md text-blue-800">
                  <p className="font-medium mb-2">Required Documents:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Proof of identity (ID document/Passport)</li>
                    <li>Proof of address (not older than 3 months)</li>
                    <li>Bank statement (not older than 3 months)</li>
                  </ul>
                </div>
                
                <div className="p-4 border-2 border-dashed rounded-lg">
                  <FileUpload onFileUploaded={handleFileUpload} isUploading={isUploading} />
                </div>
                
                <div className="space-y-2">
                  {uploadedFiles.length > 0 ? (
                    uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="truncate max-w-[80%]">{file.name}</span>
                        <span className="text-green-600 text-xs">Uploaded</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 italic">No documents uploaded yet</p>
                  )}
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
                disabled={uploadedFiles.length === 0 || !acceptedTerms || isLoading}
                className="w-full bg-gold hover:bg-lightgold"
              >
                {isLoading ? "Processing..." : "Complete Registration"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompleteRegistration;
