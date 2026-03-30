import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Cases from "./pages/Cases";
import CasePage from "./pages/CasePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MartinLab from "./pages/MartinLab";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:slug" element={<ServicePage />} />
          <Route path="/kejsy" element={<Cases />} />
          <Route path="/kejsy/:slug" element={<CasePage />} />
          <Route path="/o-kompanii" element={<About />} />
          <Route path="/brief" element={<Contact />} />
          <Route path="/kontakty" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/martin-lab" element={<MartinLab />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;