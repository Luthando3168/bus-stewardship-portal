
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  image: string;
  bgGradient: string;
  fundName: string;
}

const PageHeader = ({ image, bgGradient, fundName }: PageHeaderProps) => {
  return (
    <>
      <div className="mb-8">
        <Link 
          to="/impact-funds" 
          className="inline-flex items-center text-navyblue hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Impact Funds
        </Link>
      </div>

      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
        <img
          src={image}
          alt={fundName}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-60`}></div>
        <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
          {fundName}
        </h1>
      </div>
    </>
  );
};

export default PageHeader;
