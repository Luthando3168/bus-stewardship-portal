
import React from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserBeneficiaries = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Beneficiaries</h2>
        <p className="text-muted-foreground">
          Manage your beneficiary details for your investment accounts
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Beneficiary Details</CardTitle>
            <CardDescription>
              In case of emergency, these details will be used to contact your beneficiaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Primary Beneficiary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p>Sarah Dlamini</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relationship</p>
                    <p>Spouse</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>073 123 4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>sarah.d@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">Edit Details</Button>
              </div>
              
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Secondary Beneficiary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p>Thabo Dlamini</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relationship</p>
                    <p>Son</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>082 987 6543</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>thabo.d@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">Edit Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Add New Beneficiary</CardTitle>
            <CardDescription>
              You can add additional beneficiaries to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-gold hover:bg-lightgold text-white">
              Add Beneficiary
            </Button>
          </CardContent>
        </Card>
      </div>
    </UserLayout>
  );
};

export default UserBeneficiaries;
