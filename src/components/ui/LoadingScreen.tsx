
import { Loader } from "lucide-react";

const LoadingScreen = ({ message = "Loading your account..." }: { message?: string }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightgray">
      <div className="text-center">
        <Loader className="h-8 w-8 animate-spin text-navyblue mx-auto mb-4" />
        <p className="text-navyblue">{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
