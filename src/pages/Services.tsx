import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import ServiceTypoIcon from "@/components/ServiceTypoIcon";

const Services = () => (
  <>
    <SEO
      title="Услуги видеомаркетинга"
      description="Полный спектр услуг Martin Media: видеопродакшн, рекламные ролики, TikTok и Reels, SMM-стратегия, 3D/VFX, AI-решения, корпоративные фильмы, аэросъёмка. Минск, Беларусь."
      path="/uslugi"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Услуги", url: "/uslugi" }]} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Услуги</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Полный спектр услуг видеомаркетинга — от стратегии до готового контента
            </p>
          </motion.div>

          {serviceCategories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.id);
            if (catServices.length === 0) return null;
            return (
              <div key={cat.id} className="mt-14">
                <h2 className="text-2xl font-bold text-foreground">{cat.label}</h2>
                <p className="text-muted-foreground mt-1">{cat.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                  {catServices.map((s, i) => (
                    <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                      <Link to={`/uslugi/${s.slug}`} className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all h-full">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {getIcon(s.icon)}
                        </div>
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{s.description}</p>
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
