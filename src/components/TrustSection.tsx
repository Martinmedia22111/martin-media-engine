import { motion } from "framer-motion";

const TrustSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
      {/* Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
      >
        {[
          { value: "3000+", label: "Реализованных проектов" },
          { value: "125+", label: "Довольных клиентов" },
          { value: "100M+", label: "Просмотров контента" },
          { value: "9+", label: "Лет на рынке" },
        ].map((n) => (
          <div key={n.label} className="text-center">
            <div className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{n.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{n.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
