
import { cn } from "@/lib/utils";

interface PasswordStrengthIndicatorProps {
  strength: 'weak' | 'medium' | 'strong';
  message: string;
}

export const PasswordStrengthIndicator = ({ strength, message }: PasswordStrengthIndicatorProps) => {
  const barWidth = {
    weak: 'w-1/3',
    medium: 'w-2/3',
    strong: 'w-full'
  }[strength];

  const barColor = {
    weak: 'bg-red-500',
    medium: 'bg-yellow-500',
    strong: 'bg-green-500'
  }[strength];

  return (
    <div className="space-y-2 text-sm">
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-300", barWidth, barColor)}
        />
      </div>
      <p className={cn("text-xs", {
        'text-red-500': strength === 'weak',
        'text-yellow-500': strength === 'medium',
        'text-green-500': strength === 'strong',
      })}>
        {message}
      </p>
    </div>
  );
};
