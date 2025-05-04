
import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Define service items for each service type
const serviceItems = {
  housekeeping: [
    { id: "general-cleaning", label: "General cleaning" },
    { id: "deep-cleaning", label: "Deep cleaning" },
    { id: "laundry", label: "Laundry" },
    { id: "ironing", label: "Ironing" },
    { id: "organizing", label: "Organizing & decluttering" },
    { id: "window-cleaning", label: "Window cleaning" },
    { id: "kitchen-deep-clean", label: "Kitchen deep clean" },
    { id: "bathroom-deep-clean", label: "Bathroom deep clean" },
    { id: "carpet-cleaning", label: "Carpet cleaning" }
  ],
  gardening: [
    { id: "lawn-mowing", label: "Lawn mowing" },
    { id: "hedge-trimming", label: "Hedge trimming" },
    { id: "weed-removal", label: "Weed removal" },
    { id: "plant-care", label: "Plant care" },
    { id: "irrigation", label: "Irrigation system maintenance" },
    { id: "fertilizing", label: "Fertilizing" },
    { id: "garden-cleaning", label: "Garden cleaning & waste removal" },
    { id: "tree-pruning", label: "Tree pruning" },
    { id: "pest-control", label: "Pest control" }
  ],
  childcare: [
    { id: "babysitting", label: "Babysitting" },
    { id: "homework-help", label: "Homework assistance" },
    { id: "meal-prep", label: "Meal preparation" },
    { id: "school-pickup", label: "School pickup/dropoff" },
    { id: "bath-bedtime", label: "Bath and bedtime routine" },
    { id: "educational-activities", label: "Educational activities" },
    { id: "infant-care", label: "Infant care" },
    { id: "special-needs", label: "Special needs care" },
    { id: "overnight-care", label: "Overnight care" }
  ]
};

interface ServiceItemsSelectorProps {
  serviceType: string;
  form: any; // Using any for simplicity, but you could define a more specific type
}

const ServiceItemsSelector = ({ serviceType, form }: ServiceItemsSelectorProps) => {
  const items = serviceItems[serviceType as keyof typeof serviceItems] || [];
  
  // Register the items with the form if not already registered
  React.useEffect(() => {
    if (form && !form.getValues("selectedItems")) {
      form.setValue("selectedItems", []);
    }
  }, [form]);

  const handleItemChange = (id: string, checked: boolean) => {
    const currentItems = form.getValues("selectedItems") || [];
    
    if (checked) {
      form.setValue("selectedItems", [...currentItems, id]);
    } else {
      form.setValue("selectedItems", currentItems.filter((item: string) => item !== id));
    }
  };

  if (items.length === 0) {
    return <p className="text-sm text-gray-500">No specific service items available for this category.</p>;
  }

  return (
    <div className="border rounded-md p-4">
      <p className="text-sm text-gray-500 mb-3">Select all that apply:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start space-x-2">
            <Checkbox 
              id={item.id} 
              onCheckedChange={(checked) => handleItemChange(item.id, !!checked)}
            />
            <Label htmlFor={item.id} className="text-sm leading-none pt-0.5">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItemsSelector;
