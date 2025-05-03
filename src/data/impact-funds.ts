export const impactFunds = [
  { id: "myfarm", name: "MyFarm", color: "bg-emerald-50", textColor: "text-emerald-700" },
  { id: "myproperty", name: "MyProperty", color: "bg-blue-50", textColor: "text-blue-700" },
  { id: "myfoodretail", name: "MyFoodRetail", color: "bg-amber-50", textColor: "text-amber-700" },
  { id: "myenergy", name: "MyEnergy", color: "bg-orange-50", textColor: "text-orange-700" },
  { id: "myfranchise", name: "MyFranchise", color: "bg-purple-50", textColor: "text-purple-700" },
  { id: "myhealth", name: "MyHealth", color: "bg-rose-50", textColor: "text-rose-700" },
  { id: "myschool", name: "MySchool", color: "bg-cyan-50", textColor: "text-cyan-700" },
  { id: "mytelco", name: "MyTelco", color: "bg-indigo-50", textColor: "text-indigo-700" },
];

// Fund images mapping
export const fundImages = {
  myfarm: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1280&h=720",
  myproperty: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1280&h=720",
  myfoodretail: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1280&h=720",
  myenergy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1280&h=720",
  myfranchise: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1280&h=720",
  myhealth: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1280&h=720",
  myschool: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1280&h=720",
  mytelco: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&fit=crop&q=80&w=1280&h=720",
};

export type Opportunity = {
  id: string;
  fundId: string;
  title: string;
  summary: string;
  minInvestment: string;
  projectedReturn: string;
  status: "Open" | "Closed";
}

export const opportunities: Opportunity[] = [
  {
    id: "opp1",
    fundId: "myfarm",
    title: "Urban Farming Project",
    summary: "Vertical farming operation in Johannesburg",
    minInvestment: "R 2,000",
    projectedReturn: "12-15% p.a.",
    status: "Open"
  },
  {
    id: "opp2",
    fundId: "myfarm",
    title: "Organic Produce Co-op",
    summary: "Community-owned organic farm in KwaZulu-Natal",
    minInvestment: "R 5,000",
    projectedReturn: "8-10% p.a.",
    status: "Open"
  },
  {
    id: "opp3",
    fundId: "myproperty",
    title: "Affordable Housing Complex",
    summary: "Mixed-use development in Soweto with 40 units",
    minInvestment: "R 10,000",
    projectedReturn: "14% p.a.",
    status: "Open"
  },
  {
    id: "opp4",
    fundId: "myproperty",
    title: "Student Accommodation",
    summary: "Purpose-built student housing near University of Cape Town",
    minInvestment: "R 5,000",
    projectedReturn: "12% p.a.",
    status: "Open"
  },
  {
    id: "opp5",
    fundId: "myfoodretail",
    title: "Community Food Market",
    summary: "Food retail hub in Alexandra township",
    minInvestment: "R 5,000",
    projectedReturn: "11% p.a.",
    status: "Open"
  },
  {
    id: "opp6",
    fundId: "myenergy",
    title: "Solar Farm Project",
    summary: "1MW solar installation in Northern Cape",
    minInvestment: "R 3,000",
    projectedReturn: "13% p.a.",
    status: "Open"
  },
  {
    id: "opp7",
    fundId: "myfranchise",
    title: "Tech Startup Incubator",
    summary: "Funding for early-stage tech businesses in Gauteng",
    minInvestment: "R 5,000",
    projectedReturn: "15-20% p.a.",
    status: "Open"
  },
  {
    id: "opp8",
    fundId: "mytelco",
    title: "Rural Connectivity Project",
    summary: "Expanding internet access to underserved Eastern Cape communities",
    minInvestment: "R 2,500",
    projectedReturn: "10-12% p.a.",
    status: "Open"
  }
];
