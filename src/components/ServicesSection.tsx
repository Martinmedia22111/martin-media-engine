import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import { Video, Clapperboard, Smartphone, BarChart3, Box, Bot, Cpu, Factory, Palette, ArrowRight } from "lucide-react";

const iconMap: Record<string, typeof Video> = {
  Video, Clapperboard, Smartphone, BarChart3, Box, Bot, Cpu, Factory, Palette,
};

const ServicesSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Направления</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Единая экосистема: от стратегии и продакшна до AI-автоматизации
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {serviceCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
          >
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">{cat.label}</span>
              <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
            </div>
            <div className="space-y-3">
              {services
                .filter((s) => s.category === cat.id)
                .map((service) => {
                  const Icon = iconMap[service.icon] || Video;
                  return (
                    <Link
                      key={service.slug}
                      to={`/uslugi/${service.slug}`}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-sm text-foreground">{service.shortTitle}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">{service.description}</p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </Link>
                  );
                })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link to="/uslugi" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
          Все услуги <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;