import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import { ArrowRight } from "lucide-react";
import ServiceTypoIcon from "@/components/ServiceTypoIcon";

const ServicesSection = () => (
  <section className="section-padding bg-secondary/50 relative overflow-hidden">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent">Направления</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Единая экосистема: от стратегии и продакшна до AI-автоматизации
        </p>
      </motion.div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {serviceCategories.filter(c => c.id !== "special").map((cat) => (
          <span
            key={cat.id}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-border bg-card text-muted-foreground"
          >
            {cat.label}
          </span>
        ))}
      </div>

      {/* Glass grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.filter(s => s.category !== "special").map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              to={`/uslugi/${service.slug}`}
              className="group relative flex flex-col h-full rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative flex items-center justify-center h-28 px-4 overflow-hidden bg-secondary/50">
                <ServiceTypoIcon
                  slug={service.slug}
                  className="relative text-[44px] sm:text-[48px] text-foreground/90 group-hover:text-primary transition-colors duration-300"
                />
              </div>

              {/* тонкий разделитель-стекло */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-heading font-semibold text-sm text-foreground leading-snug">
                  {service.shortTitle}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-white/60 backdrop-blur-sm border border-white/70 text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    Подробнее
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link to="/uslugi" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          Все услуги <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
