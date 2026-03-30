import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import ServicesSection from "@/components/ServicesSection";
import CasesShowcase from "@/components/CasesShowcase";
import ResultsSection from "@/components/ResultsSection";
import MartinLabSection from "@/components/MartinLabSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ClientsSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <CasesShowcase />
      <ResultsSection />
      <MartinLabSection />
      <ProcessSection />
      <TrustSection />
      <BlogPreview />
      <FAQSection />
      <CTASection variant="dark" />
    </main>
    <Footer />
  </>
);

export default Index;