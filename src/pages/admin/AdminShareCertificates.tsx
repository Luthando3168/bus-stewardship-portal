import React, { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CertificateActions } from "@/components/admin/certificates/CertificateActions";

// Define our certificate type
interface Certificate {
  id: string;
  userId: number;
  userName: string;
  clientNumber: string;
  investmentId: number;
  investmentName: string;
  companyName: string;
  registrationNumber: string;
  shares: number;
  sharePrice: number;
  issueDate: string;
  status: string;
  sequentialNumber?: string;
}

// Define our fund certificates data type
interface FundCertificatesData {
  [fundName: string]: Certificate[];
}

// Define our company certificates data type
interface CertificatesByCompany {
  [fundName: string]: {
    [companyName: string]: Certificate[];
  };
}

const fundCertificatesData: FundCertificatesData = {
  "MyFoodRetail Impact Fund": [
    {
      id: "SC-101-742",
      userId: 1,
      userName: "John Dube",
      clientNumber: "LM20230001",
      investmentId: 101,
      investmentName: "Lifestyle Mini Complex",
      companyName: "Lifestyle Mini Complex (Pty) Ltd",
      registrationNumber: "2023/123456/07",
      shares: 250,
      sharePrice: 100,
      issueDate: "2023-02-15",
      status: "active"
    }
  ],
  "MyTelco Impact Fund": [
    {
      id: "SC-102-835",
      userId: 1,
      userName: "John Dube",
      clientNumber: "LM20230001",
      investmentId: 102,
      investmentName: "Rural Connectivity Project",
      companyName: "Rural Connect Technologies (Pty) Ltd",
      registrationNumber: "2023/654321/07",
      shares: 120,
      sharePrice: 125,
      issueDate: "2023-03-10",
      status: "active"
    }
  ],
  "MyProperty Impact Fund": [
    {
      id: "SC-103-491",
      userId: 2,
      userName: "Sarah Nkosi",
      clientNumber: "LM20230002",
      investmentId: 103,
      investmentName: "Downtown Office Building",
      companyName: "Urban Property Holdings (Pty) Ltd",
      registrationNumber: "2023/789123/07",
      shares: 300,
      sharePrice: 150,
      issueDate: "2023-01-20",
      status: "active"
    }
  ]
};

const AdminShareCertificates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedFund, setSelectedFund] = useState<string>("all");
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [viewingCertificate, setViewingCertificate] = useState<string | null>(null);
  
  const allCertificates = Object.values(fundCertificatesData).flat();
  const fundsList = Object.keys(fundCertificatesData);
  
  // Get unique companies across all funds
  const companiesList = Array.from(new Set(allCertificates.map(cert => cert.companyName)));
  
  const filteredCertificates = allCertificates.filter(cert => {
    const matchesSearch = 
      cert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.clientNumber.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === "all" || cert.status === statusFilter;
    const matchesFund = selectedFund === "all" || 
      Object.entries(fundCertificatesData).some(([fund, certs]) => 
        fund === selectedFund && certs.some(c => c.id === cert.id)
      );
    const matchesCompany = selectedCompany === "all" || cert.companyName === selectedCompany;
    
    return matchesSearch && matchesStatus && matchesFund && matchesCompany;
  });

  const handleStatusChange = (certificateId: string, newStatus: string) => {
    const updatedCertificates = allCertificates.map(cert => 
      cert.id === certificateId ? { ...cert, status: newStatus } : cert
    );
    
    Object.keys(fundCertificatesData).forEach(fund => {
      fundCertificatesData[fund] = fundCertificatesData[fund].map(cert =>
        cert.id === certificateId ? { ...cert, status: newStatus } : cert
      );
    });
  };

  // Group certificates by company within each fund with proper typing
  const certificatesByCompany: CertificatesByCompany = {};
  Object.entries(fundCertificatesData).forEach(([fundName, certificates]) => {
    certificatesByCompany[fundName] = {};
    certificates.forEach(cert => {
      if (!certificatesByCompany[fundName][cert.companyName]) {
        certificatesByCompany[fundName][cert.companyName] = [];
      }
      certificatesByCompany[fundName][cert.companyName].push({
        ...cert,
        sequentialNumber: (certificatesByCompany[fundName][cert.companyName].length + 1).toString().padStart(3, '0')
      });
    });
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navyblue">Share Certificates Registry</h2>
          <Button className="bg-gold hover:bg-lightgold">
            Generate Report
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Share Certificates</CardTitle>
            <CardDescription>
              Filter and view share certificates by fund and company
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 space-y-4">
                <Select value={selectedFund} onValueChange={setSelectedFund}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Impact Fund" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Impact Funds</SelectItem>
                    {fundsList.map((fund) => (
                      <SelectItem key={fund} value={fund}>
                        {fund}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={selectedCompany} 
                  onValueChange={setSelectedCompany}
                  disabled={selectedFund === "all"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    {companiesList.map((company) => (
                      <SelectItem key={company} value={company}>
                        {company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search certificates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="revoked">Revoked</SelectItem>
                    <SelectItem value="transferred">Transferred</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Certificate ID</TableHead>
                    <TableHead>Client Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Fund</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-mono text-sm">{cert.id}</TableCell>
                        <TableCell>{cert.userName}</TableCell>
                        <TableCell>{cert.companyName}</TableCell>
                        <TableCell>
                          {Object.entries(fundCertificatesData).find(([_, certs]) =>
                            certs.some(c => c.id === cert.id)
                          )?.[0]}
                        </TableCell>
                        <TableCell>{cert.shares} @ R{cert.sharePrice}</TableCell>
                        <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={
                            cert.status === "active" ? "bg-green-600" :
                            cert.status === "revoked" ? "bg-red-600" :
                            "bg-amber-600"
                          }>
                            {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <CertificateActions
                              certificateId={cert.id}
                              status={cert.status}
                              onStatusChange={handleStatusChange}
                            />
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setViewingCertificate(cert.id)}
                            >
                              <Eye size={14} />
                              <span className="hidden sm:inline">View</span>
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                            >
                              <Download size={14} />
                              <span className="hidden sm:inline">PDF</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No certificates found matching your search criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Dialog open={viewingCertificate !== null} onOpenChange={() => setViewingCertificate(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Share Certificate Preview</DialogTitle>
            </DialogHeader>
            
            {selectedCertificate && (
              <div className="space-y-4">
                <div className="border-2 border-gray-300 p-6 rounded-md bg-white">
                  <div className="text-center space-y-4">
                    <div className="border-b-2 border-navyblue pb-2">
                      <h3 className="text-lg font-bold uppercase text-navyblue">Republic of South Africa</h3>
                      <p className="text-xs text-muted-foreground">Companies Act, 2008 (Act 71 of 2008)</p>
                    </div>
                    
                    <h3 className="text-xl font-bold uppercase text-navyblue pt-2">Certificate of Share Ownership</h3>
                    
                    <div className="space-y-1">
                      <p className="font-semibold text-lg">{selectedCertificate.companyName}</p>
                      <p className="text-sm">Registration Number: {selectedCertificate.registrationNumber}</p>
                      <p className="text-sm text-muted-foreground">Share certificate issued in terms of section 51(1)(a) of the Companies Act, 2008</p>
                    </div>
                    
                    <div className="my-6 border-t border-b border-gray-300 py-4">
                      <p>This is to certify that</p>
                      <p className="font-bold text-lg my-2">{selectedCertificate.userName}</p>
                      <p>Client Number: {selectedCertificate.clientNumber}</p>
                      <p className="my-2">is the registered holder of</p>
                      <p className="font-bold text-xl my-2">{selectedCertificate.shares} Ordinary Shares</p>
                      <p className="text-sm">with a nominal value of R{selectedCertificate.sharePrice} each, fully paid</p>
                      <p className="mt-2">in the above-named Company, subject to the Memorandum and Articles of Association of the Company.</p>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <p>Issue Date: {new Date(selectedCertificate.issueDate).toLocaleDateString()}</p>
                        <p>Certificate No: {selectedCertificate.id}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-300">
                      <p className="font-semibold">Luthando Maduna CA(SA)</p>
                      <p className="text-sm italic">Director</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge className={
                      selectedCertificate.status === "active" ? "bg-green-600" :
                      selectedCertificate.status === "revoked" ? "bg-red-600" :
                      "bg-amber-600"
                    }>
                      {selectedCertificate.status.charAt(0).toUpperCase() + selectedCertificate.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Certificate ID: {selectedCertificate.id}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline">
                      Print
                    </Button>
                    <Button variant="outline">
                      Download as PDF
                    </Button>
                    <Button className="bg-navyblue hover:bg-blue-800">
                      Email to Client
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminShareCertificates;
