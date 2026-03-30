import { motion } from "framer-motion";
import { clients } from "@/data/company";

const ClientsSection = () => (
  <section className="section-padding-sm border-b border-border bg-background">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-8"
      >
        Нам доверяют ведущие бренды
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
      >
        {clients.map((name) => (
          <div
            key={name}
            className="font-heading font-bold text-base md:text-lg text-neutral-300 tracking-wider select-none"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientsSection;