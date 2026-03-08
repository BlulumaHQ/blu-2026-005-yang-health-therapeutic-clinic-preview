import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReset from "@/components/ScrollReset";
import Index from "./pages/Index";
import About from "./pages/About";
import TCM from "./pages/TCM";
import RMT from "./pages/RMT";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollReset />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about/" element={<About />} />
              <Route path="/chinese-traditional-medicine/" element={<TCM />} />
              <Route path="/registered-massage-therapy/" element={<RMT />} />
              <Route path="/contact-us/" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
