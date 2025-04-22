import UserLayout from "@/components/layout/UserLayout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import FundAccordion from "@/components/FundAccordion";
import { Star } from "lucide-react";

const FUNDS = [
  {
    name: "Sankofa Property Impact Fund",
    description: "A diversified fund investing in sustainable property projects across South Africa.",
    currency: "ZAR",
    minInvestment: "R 50,000",
    term: "5 Years",
    risk: "Moderate",
  },
  {
    name: "Sankofa Agri Impact Fund",
    description: "Focus on transforming African agriculture through impact-driven investments.",
    currency: "ZAR",
    minInvestment: "R 30,000",
    term: "3 Years",
    risk: "Moderate",
  },
  {
    name: "Sankofa Private Credit Impact Fund",
    description: "Africa-focused credit fund delivering blended value through innovative lending.",
    currency: "USD",
    minInvestment: "$10,000",
    term: "2-5 Years",
    risk: "Medium to High",
  },
  {
    name: "Sankofa Energy Impact Fund",
    description: "Direct investment into renewable and alternative energy projects.",
    currency: "ZAR",
    minInvestment: "R 75,000",
    term: "4 Years",
    risk: "High",
  },
];

const RedStar = () => <Star size={14} className="text-red-500 inline ml-1" />;

const REQUIRED_FIELDS = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email Address" },
  { key: "phone", label: "Phone Number" },
  { key: "idNumber", label: "ID Number" },
  { key: "taxNumber", label: "Tax Number" },
  { key: "address", label: "Physical Address" },
  { key: "occupation", label: "Occupation" },
  { key: "riskProfile", label: "Risk Profile" },
  { key: "sourceOfFunds", label: "Source of Funds" },
  { key: "dob", label: "Date of Birth" }
];

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: "John Dube",
    email: "",
    phone: "+27 62 123 4567",
    idNumber: "7801015387082",
    taxNumber: "",
    address: "123 Main Street, Sandton, Johannesburg, 2031",
    occupation: "",
    riskProfile: "Moderate",
    sourceOfFunds: "",
    dob: "",
    joinDate: "January 15, 2023"
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile information updated successfully");
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      toast.error("New passwords don't match");
      return;
    }
    if (password.new.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    toast.success("Password updated successfully");
    setPassword({ current: "", new: "", confirm: "" });
  };

  const isMissing = (field: string) => !userData[field as keyof typeof userData];

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue flex items-center">
          My Profile
          {REQUIRED_FIELDS.some(f => isMissing(f.key)) && <RedStar />}
        </h2>
        <Tabs defaultValue="personal">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="investment">Investment Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please complete all fields. <RedStar /> indicates required or missing info.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {REQUIRED_FIELDS.filter((f) => !["sourceOfFunds","dob"].includes(f.key)).map(({ key, label }) => (
                      <div className="space-y-2" key={key}>
                        <Label htmlFor={key}>
                          {label} {isMissing(key) && <RedStar />}
                        </Label>
                        <Input
                          id={key}
                          value={userData[key as keyof typeof userData]}
                          onChange={(e) =>
                            setUserData({ ...userData, [key]: e.target.value })
                          }
                          disabled={["idNumber", "taxNumber"].includes(key)}
                        />
                        {["idNumber", "taxNumber"].includes(key) && (
                          <p className="text-xs text-muted-foreground">{label} cannot be changed</p>
                        )}
                      </div>
                    ))}
                    <div className="space-y-2">
                      <Label htmlFor="sourceOfFunds">
                        Source of Funds {isMissing("sourceOfFunds") && <RedStar />}
                      </Label>
                      <Input
                        id="sourceOfFunds"
                        value={userData.sourceOfFunds}
                        onChange={(e) =>
                          setUserData({ ...userData, sourceOfFunds: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">
                        Date of Birth {isMissing("dob") && <RedStar />}
                      </Label>
                      <Input
                        id="dob"
                        type="date"
                        value={userData.dob}
                        onChange={(e) =>
                          setUserData({ ...userData, dob: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-gold hover:bg-lightgold text-white">
                      Update Profile
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Update your password for enhanced security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        value={password.current}
                        onChange={(e) =>
                          setPassword({ ...password, current: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={password.new}
                        onChange={(e) =>
                          setPassword({ ...password, new: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={password.confirm}
                        onChange={(e) =>
                          setPassword({ ...password, confirm: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-gold hover:bg-lightgold text-white">
                      Change Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="investment">
            <Card>
              <CardHeader>
                <CardTitle>Investment Fund Options</CardTitle>
                <CardDescription>
                  View details about available investment funds below. Click a fund to expand/collapse.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FundAccordion funds={FUNDS} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserProfile;
