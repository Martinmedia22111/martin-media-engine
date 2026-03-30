import { motion } from "framer-motion";

const clients = [
  "СБЕР", "ЯНДЕКС", "МТС", "ТИНЬКОФФ", "OZON", "VK", "ОЗОН БАНК", "WILDBERRIES",
];

const ClientsSection = () => (
  <section className="section-padding-sm border-b border-border bg-background">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-8"
      >
        Нам доверяют лидеры рынка
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      >
        {clients.map((name) => (
          <div
            key={name}
            className="font-heading font-bold text-lg md:text-xl text-neutral-300 tracking-wider select-none"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientsSection;