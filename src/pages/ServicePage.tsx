import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="min-h-screen flex items-center justify-center"><p>Услуга не найдена</p></div>;

  const relatedCases = cases.filter((c) => c.services.includes(service.slug)).slice(0, 3);
  const relatedServices = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        path={`/uslugi/${service.slug}`}
      />
      <ServiceJsonLd name={service.title} description={service.description} slug={service.slug} />
      {service.faq.length > 0 && <FAQJsonLd items={service.faq} />}
      <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Услуги", url: "/uslugi" }, { name: service.shortTitle, url: `/uslugi/${service.slug}` }]} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/uslugi" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Все услуги</Link>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{service.description}</p>
              <div className="mt-8">
                <Button asChild variant="hero" size="lg"><Link to="/brief">Обсудить {service.shortTitle.toLowerCase()} <ArrowRight size={16} className="ml-1" /></Link></Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="section-padding-sm bg-secondary/50">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Знакомо?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.painPoints.map((p, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-card">
                  <p className="text-foreground text-sm font-medium">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="section-padding bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Что входит</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding-sm bg-secondary/50">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Процесс работы</h2>
            <div className="space-y-4">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Результаты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.results.map((r, i) => (
                <div key={i} className="p-5 rounded-xl border border-primary/20 bg-primary/[0.03]">
                  <p className="text-primary font-semibold text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <section className="section-padding-sm bg-secondary/50">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Кейсы</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedCases.map((c) => (
                  <Link key={c.id} to={`/kejsy/${c.slug}`} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all">
                    <p className="text-xs text-muted-foreground mb-2">{c.client}</p>
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">{c.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* For whom */}
        <section className="section-padding bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Для кого подходит</h2>
            <div className="flex flex-wrap gap-2">
              {service.forWhom.map((w) => (
                <span key={w} className="px-4 py-2 rounded-full border border-border text-sm text-foreground">{w}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={service.faq} title={`FAQ: ${service.shortTitle}`} />

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="section-padding-sm bg-secondary/50">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Связанные услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <Link key={s.slug} to={`/uslugi/${s.slug}`} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all">
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{s.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection title={`Обсудить ${service.shortTitle.toLowerCase()}`} subtitle="Расскажите о задаче — предложим решение за 24 часа" />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;