import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Creating placeholders for the future pages
const About = () => <div className="min-h-screen pt-16">About Page Coming Soon</div>;
const Services = () => <div className="min-h-screen pt-16">Services Page Coming Soon</div>;
const Bus = () => <div className="min-h-screen pt-16">BUS Program Page Coming Soon</div>;
const ImpactFunds = () => <div className="min-h-screen pt-16">Impact Funds Page Coming Soon</div>;
const Foundation = () => <div className="min-h-screen pt-16">Foundation Page Coming Soon</div>;
const Contact = () => <div className="min-h-screen pt-16">Contact Page Coming Soon</div>;
const Privacy = () => <div className="min-h-screen pt-16">Privacy Policy Coming Soon</div>;
const Terms = () => <div className="min-h-screen pt-16">Terms of Service Coming Soon</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/impact-funds" element={<ImpactFunds />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
