import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

import ServicesSection from "@/components/ServicesSection";
import CasesShowcase from "@/components/CasesShowcase";
import ResultsSection from "@/components/ResultsSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TrustSection from "@/components/TrustSection";
import MartinLabSection from "@/components/MartinLabSection";
import ProcessSection from "@/components/ProcessSection";
import InlineContactForm from "@/components/InlineContactForm";
import SeoTextSection from "@/components/SeoTextSection";

import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
    <SEO
      title="Martin Media — рекламное агентство полного цикла в Минске"
      description="Martin Media — рекламное агентство полного цикла в Минске. Стратегия, креатив, видеопродакшн, SMM, performance, 3D и AI-решения для бизнеса с 2015 года. 3000+ проектов, 125+ клиентов."
      path="/"
      ogImage="https://mmedia.by/og-image.jpg"
    />
    <OrganizationJsonLd />
    <WebSiteJsonLd />
    <Header />
    <main>
      <HeroSection />
      
      <WhoWeHelpSection />
      <ServicesSection />
      <InlineContactForm
        title="Нужен видеоконтент?"
        subtitle="Оставьте контакты — обсудим задачи и предложим решение"
      />
      <CasesShowcase />
      <ResultsSection />
      <ClientsMarquee />
      <TrustSection />
      <MartinLabSection />
      <ProcessSection />
      <SeoTextSection />
      <FAQSection />
      <CTASection variant="dark" />
    </main>
    <Footer />
  </>
);

export default Index;
