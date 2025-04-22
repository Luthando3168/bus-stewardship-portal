
import UserLayout from "@/components/layout/UserLayout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const UserProfile = () => {
  // Mock user data
  const [userData, setUserData] = useState({
    fullName: "John Dube",
    email: "john.d@example.com",
    phone: "+27 62 123 4567",
    idNumber: "7801015387082",
    taxNumber: "1234567890",
    address: "123 Main Street, Sandton, Johannesburg, 2031",
    occupation: "Business Owner",
    riskProfile: "Moderate",
    joinDate: "January 15, 2023"
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
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
    // In a real app, this would send to a backend
    toast.success("Password updated successfully");
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Profile</h2>

        <Tabs defaultValue="personal">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Your personal details as provided during onboarding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={userData.fullName}
                        onChange={(e) =>
                          setUserData({ ...userData, fullName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">ID Number</Label>
                      <Input
                        id="idNumber"
                        value={userData.idNumber}
                        disabled
                      />
                      <p className="text-xs text-muted-foreground">
                        ID number cannot be changed
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taxNumber">Tax Number</Label>
                      <Input
                        id="taxNumber"
                        value={userData.taxNumber}
                        disabled
                      />
                      <p className="text-xs text-muted-foreground">
                        Tax number cannot be changed
                      </p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Physical Address</Label>
                      <Input
                        id="address"
                        value={userData.address}
                        onChange={(e) =>
                          setUserData({ ...userData, address: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={userData.occupation}
                        onChange={(e) =>
                          setUserData({ ...userData, occupation: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="riskProfile">Risk Profile</Label>
                      <select
                        id="riskProfile"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={userData.riskProfile}
                        onChange={(e) =>
                          setUserData({ ...userData, riskProfile: e.target.value })
                        }
                      >
                        <option value="Conservative">Conservative</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Aggressive">Aggressive</option>
                      </select>
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

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
                <CardDescription>
                  Important documents related to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">KYC Documents</h3>
                    <div className="rounded-md border divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">ID Document</p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded on January 15, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Proof of Address</p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded on January 15, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Bank Statement</p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded on January 15, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Tax Clearance Certificate</p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded on February 10, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Investment Documents</h3>
                    <div className="rounded-md border divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Investment Agreement</p>
                          <p className="text-sm text-muted-foreground">
                            Signed on February 1, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Risk Disclosure</p>
                          <p className="text-sm text-muted-foreground">
                            Signed on February 1, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Client Engagement Letter</p>
                          <p className="text-sm text-muted-foreground">
                            Signed on January 25, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Bank Mandate Letter</p>
                          <p className="text-sm text-muted-foreground">
                            Signed on January 25, 2023
                          </p>
                        </div>
                        <Button variant="outline">View</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserProfile;
