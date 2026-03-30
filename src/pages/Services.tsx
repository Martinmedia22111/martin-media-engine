import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import { Video, Clapperboard, Smartphone, BarChart3, Box, Bot, Cpu, Factory, Palette, ArrowRight } from "lucide-react";

const iconMap: Record<string, typeof Video> = { Video, Clapperboard, Smartphone, BarChart3, Box, Bot, Cpu, Factory, Palette };

const Services = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Услуги</h1>
            <p className="mt-4 text-lg text-muted-foreground">Единая экосистема: от стратегии и продакшна до AI-автоматизации</p>
          </motion.div>
          {serviceCategories.map((cat, ci) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }} className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{cat.label}</h2>
              <p className="text-sm text-muted-foreground mb-6">{cat.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.filter(s => s.category === cat.id).map(s => {
                  const Icon = iconMap[s.icon] || Video;
                  return (
                    <Link key={s.slug} to={`/uslugi/${s.slug}`} className="group flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Icon size={22} /></div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-foreground">{s.shortTitle}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary mt-1 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;