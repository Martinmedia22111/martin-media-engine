import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import ServiceTypoIcon from "@/components/ServiceTypoIcon";
import Breadcrumbs from "@/components/Breadcrumbs";

const Services = () => (
  <>
    <SEO
      title="Услуги рекламного агентства"
      description="Полный спектр услуг Martin Media как рекламного агентства полного цикла: стратегия и креатив, видеопродакшн, рекламные ролики, TikTok и Reels, SMM, performance, 3D/VFX, AI-решения. Минск, Беларусь."
      path="/uslugi"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Услуги", url: "/uslugi" }]} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ name: "Главная", url: "/" }, { name: "Услуги" }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Услуги</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Полный спектр услуг рекламного агентства — от стратегии и креатива до видеопродакшна, SMM и AI-решений
            </p>
          </motion.div>

          {serviceCategories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.id);
            if (catServices.length === 0) return null;
            return (
              <div key={cat.id} className="mt-14">
                <h2 className="text-2xl font-bold text-foreground">{cat.label}</h2>
                <p className="text-muted-foreground mt-1">{cat.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {catServices.map((s, i) => (
                    <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                      <Link
                        to={`/uslugi/${s.slug}`}
                        className="group flex flex-col h-full rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                      >
                        <div
                          className="relative flex items-center justify-center h-28 border-b border-border/60 px-4 overflow-hidden"
                          style={{
                            backgroundColor: "#e0e4e8",
                            backgroundImage: [
                              "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 38%, rgba(0,0,0,0.02) 62%, rgba(0,0,0,0.05) 100%)",
                              "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.35) 100%)",
                              "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)",
                              "linear-gradient(160deg, #ecf0f3 0%, #d8dce0 50%, #c4c9ce 100%)",
                            ].join(", "),
                          }}
                        >
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
                            style={{
                              background:
                                "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
                            }}
                          />
                          <ServiceTypoIcon slug={s.slug} className="relative text-[44px] sm:text-[48px] drop-shadow-sm" />
                        </div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="font-heading font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                            {s.shortTitle}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 flex-1">
                            {s.description}
                          </p>
                          <div className="mt-4 flex justify-center">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                              Подробнее
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
