
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ImpactMetricsProps {
  title: string;
  metrics: { value: string; description: string }[];
  description: string;
}

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ title, metrics, description }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-navyblue mb-6">{title}</h3>
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-gold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactMetrics;
