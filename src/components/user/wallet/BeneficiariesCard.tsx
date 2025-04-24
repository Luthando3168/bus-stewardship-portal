
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeneficiariesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Your Beneficiaries</CardTitle>
        <CardDescription>
          Review and update your beneficiary information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Your beneficiary details are important for your investment accounts. Please keep them updated.</p>
        <Link to="/user/beneficiaries">
          <Button className="bg-navyblue hover:bg-blue-800 text-white">
            View & Manage Beneficiaries
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BeneficiariesCard;
