
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Requests from "./pages/Requests";
import AccountSettings from "./pages/AccountSettings";
import PayStatement from "./pages/PayStatement";
import FAQs from "./pages/FAQs";
import PerformanceReports from "./pages/PerformanceReports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/pay-statement" element={<PayStatement />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/performance-reports" element={<PerformanceReports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
