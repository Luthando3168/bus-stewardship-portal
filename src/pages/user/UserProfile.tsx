import UserLayout from "@/components/layout/UserLayout";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Star, Plus } from "lucide-react";
import FundAccordion from "@/components/FundAccordion";
import FundOpportunities, { Opportunity } from "@/components/user/FundOpportunities";
import { Link } from "react-router-dom";

const FUNDS = [
  {
    name: "MyFarm Impact Fund",
    description: "Focus on sustainable agriculture and farming businesses across South Africa.",
    currency: "ZAR",
    minInvestment: "R 5,000",
    term: "3 Years",
    risk: "Moderate",
  },
  {
    name: "MyProperty Impact Fund",
    description: "Investing in community-focused real estate, affordable housing, and property businesses.",
    currency: "ZAR",
    minInvestment: "R 10,000",
    term: "5 Years",
    risk: "Moderate",
  },
  {
    name: "MyFranchise Impact Fund",
    description: "Investing in franchise businesses with proven models to create jobs and business skills.",
    currency: "ZAR",
    minInvestment: "R 5,000",
    term: "3-6 Years",
    risk: "Medium to High",
  },
  {
    name: "MyFoodRetail Impact Fund",
    description: "Focus on supporting and growing the food retail sector for economic development.",
    currency: "ZAR",
    minInvestment: "R 5,000",
    term: "4 Years",
    risk: "High",
  },
  {
    name: "MyEnergy Impact Fund",
    description: "Direct investment into renewable and alternative energy projects across Africa.",
    currency: "ZAR",
    minInvestment: "R 3,000",
    term: "4 Years",
    risk: "High",
  },
  {
    name: "MyHealth Impact Fund",
    description: "Empowering businesses focused on healthcare and wellness for positive social impact.",
    currency: "ZAR",
    minInvestment: "R 2,500",
    term: "3 Years",
    risk: "Medium",
  },
  {
    name: "MyTelecoms Impact Fund",
    description: "Investing in telecom infrastructure to improve connectivity and digital inclusion.",
    currency: "ZAR",
    minInvestment: "R 4,000",
    term: "3 Years",
    risk: "Medium",
  },
  {
    name: "MySchool Impact Fund",
    description: "Supporting educational projects and institutions for access to quality education.",
    currency: "ZAR",
    minInvestment: "R 1,500",
    term: "5 Years",
    risk: "Low",
  },
  {
    name: "MyTelco Impact Fund",
    description: "Investment in regional/national telecommunications expansion and infrastructure.",
    currency: "ZAR",
    minInvestment: "R 2,500",
    term: "3 Years",
    risk: "Medium",
  },
];

const PROFILE_FIELDS = [
  { key: "fullName", label: "Full Name", required: true },
  { key: "email", label: "Email Address", required: true },
  { key: "phone", label: "Phone Number", required: true },
  { key: "dob", label: "Date of Birth", required: true },
  { key: "idNumber", label: "ID Number", required: true },
  { key: "nationality", label: "Nationality", required: true },
  { key: "taxNumber", label: "Tax Number", required: true },
  { key: "taxCountry", label: "Tax Country", required: true },
  { key: "address", label: "Physical Address", required: true },
  { key: "postalCode", label: "Postal Code", required: true },
  { key: "city", label: "City", required: true },
  { key: "province", label: "Province", required: true },
  { key: "sourceOfFunds", label: "Source of Funds", required: true },
  { key: "employmentStatus", label: "Employment Status", required: true },
  { key: "employer", label: "Employer", required: false },
  { key: "occupation", label: "Occupation", required: true },
  { key: "riskProfile", label: "Risk Profile", required: true },
  { key: "incomeBracket", label: "Annual Income Bracket", required: true },
  { key: "pep", label: "Are you a PEP?", required: true }
];

const RedStar = () => <Star size={14} className="text-red-500 inline ml-1 align-text-bottom" />;

const INITIAL_USER_DATA = {
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
  employer: "",
  occupation: "",
  riskProfile: "",
  incomeBracket: "",
  pep: "",
  joinDate: ""
};

const UserProfile = () => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [activeFundTab, setActiveFundTab] = useState(FUNDS[0].name);
  const [userInvestments, setUserInvestments] = useState<Opportunity[]>([]);

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

  const isMissing = (key: string, required?: boolean) =>
    required && !userData[key as keyof typeof userData];

  useEffect(() => {
    const userInvestmentData: Opportunity[] = [
      {
        id: "opp2",
        fundId: "MyProperty Impact Fund",
        title: "Student Housing Project",
        summary: "Affordable student living in Cape Town.",
        minInvestment: "R 15,000",
        projectedReturn: "7.8% p.a.",
        status: "Open",
      },
      {
        id: "opp4",
        fundId: "MyEnergy Impact Fund",
        title: "Solar Farm Project",
        summary: "Commercial solar farm installation, regional rollout.",
        minInvestment: "R 85,000",
        projectedReturn: "11.2% p.a.",
        status: "Open",
      }
    ];
    setUserInvestments(userInvestmentData);
  }, []);

  useEffect(() => {
    const section = document.getElementById("fund-opportunity-list");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeFundTab]);

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue flex items-center">
          My Profile
          {PROFILE_FIELDS.some(f => isMissing(f.key, f.required)) && <RedStar />}
        </h2>
        <Tabs defaultValue="personal">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="personal">Personal Details</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="investment">My Investments</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Complete all required fields <RedStar /> indicates missing info.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROFILE_FIELDS.map(({ key, label, required }) => (
                      <div className="space-y-2" key={key}>
                        <Label htmlFor={key}>
                          {label} {isMissing(key, required) && <RedStar />}
                        </Label>
                        <Input
                          id={key}
                          value={userData[key as keyof typeof userData]}
                          onChange={(e) =>
                            setUserData({ ...userData, [key]: e.target.value })
                          }
                          type={["dob"].includes(key) ? "date" : "text"}
                          disabled={["idNumber", "taxNumber"].includes(key)}
                        />
                        {["idNumber", "taxNumber"].includes(key) && (
                          <p className="text-xs text-muted-foreground">{label} cannot be changed</p>
                        )}
                      </div>
                    ))}
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
                  Update your password for enhanced security.
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
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>My Investment Portfolio</CardTitle>
                    <CardDescription>
                      These are the investments you have made
                    </CardDescription>
                  </div>
                  <Link to="/user/new-deals">
                    <Button className="bg-gold hover:bg-lightgold text-white flex items-center gap-2">
                      <Plus className="h-4 w-4" /> Add Investment
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {FUNDS.map((fund) => (
                    <button
                      key={fund.name}
                      className={`px-4 py-1 rounded-full text-sm font-medium border transition
                        ${
                          activeFundTab === fund.name
                            ? "bg-navyblue text-white border-navyblue shadow"
                            : "bg-muted text-navyblue border-gray-300 hover:bg-blue-100"
                        }`}
                      onClick={() => setActiveFundTab(fund.name)}
                      type="button"
                      tabIndex={0}
                      aria-pressed={activeFundTab === fund.name}
                    >
                      {fund.name.replace(" Impact Fund", "")}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <FundAccordion funds={FUNDS} />
                <div id="fund-opportunity-list" className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">My Investments in These Funds</h3>
                  <FundOpportunities
                    fundId={activeFundTab}
                    opportunities={userInvestments}
                  />
                  {userInvestments.filter(opp => opp.fundId === activeFundTab).length === 0 && (
                    <div className="text-center py-8 bg-gray-50 rounded-md border">
                      <p className="text-muted-foreground">You haven't invested in this fund yet.</p>
                      <Link to="/user/new-deals">
                        <Button className="mt-4 bg-gold hover:bg-lightgold text-white">
                          Browse Investment Opportunities
                        </Button>
                      </Link>
                    </div>
                  )}
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
