
import { Step } from "./index";

interface FormProgressProps {
  currentStep: Step;
}

const FormProgress = ({ currentStep }: FormProgressProps) => {
  const steps = [
    { id: "PERSONAL", label: "Personal Information" },
    { id: "DOCUMENTS", label: "Document Upload" }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${currentStep === step.id ? 'border-gold bg-gold text-white' : 'border-gray-300 text-gray-500'}`}>
              {idx + 1}
            </div>
            <div className="ml-2 text-sm font-medium text-gray-700">{step.label}</div>
            {idx < steps.length - 1 && (
              <div className="mx-4 h-0.5 w-16 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;
