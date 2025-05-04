
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Review {
  rating: number;
  comment: string;
  date: string;
  isProvider: boolean;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  if (reviews.length === 0) {
    return (
      <p className="text-center py-6 text-gray-500">No reviews yet.</p>
    );
  }
  
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {review.date}
                </span>
              </div>
              <Badge variant="outline" className={review.isProvider ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}>
                {review.isProvider ? "Provider's feedback" : "Client's feedback"}
              </Badge>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReviewsList;
