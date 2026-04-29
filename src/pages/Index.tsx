import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import ServicesSection from "@/components/ServicesSection";

// Below-the-fold sections — lazy loaded to reduce initial JS
const CasesShowcase = lazy(() => import("@/components/CasesShowcase"));
const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const ClientsMarquee = lazy(() => import("@/components/ClientsMarquee"));
const MartinLabSection = lazy(() => import("@/components/MartinLabSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const InlineContactForm = lazy(() => import("@/components/InlineContactForm"));
const BlogPreview = lazy(() => import("@/components/BlogPreview"));
const SeoTextSection = lazy(() => import("@/components/SeoTextSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const SectionFallback = () => <div className="min-h-[200px]" />;

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
      <ServicesSection />
      <Suspense fallback={<SectionFallback />}>
        <InlineContactForm
          title="Нужен видеоконтент?"
          subtitle="Оставьте контакты — обсудим задачи и предложим решение"
          variant="dark"
        />
        <CasesShowcase />
        <ResultsSection />
        <ClientsMarquee />
        <MartinLabSection />
        <ProcessSection />
        <SeoTextSection />
        <BlogPreview />
        <FAQSection />
        <CTASection variant="dark" />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default Index;
