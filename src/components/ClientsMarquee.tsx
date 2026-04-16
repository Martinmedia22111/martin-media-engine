import { clients } from "@/data/company";
import { motion } from "framer-motion";

const doubled = [...clients, ...clients];

const ClientsMarquee = () => (
  <section className="py-12 md:py-16 bg-secondary/30 overflow-hidden">
    <div className="container mb-8">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium"
      >
        Нам доверяют
      </motion.p>
    </div>

    {/* Row 1 — left */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee-left gap-8 py-3">
        {doubled.map((name, i) => (
          <span
            key={`l-${i}`}
            className="shrink-0 text-sm md:text-base font-heading font-semibold tracking-wide text-muted-foreground/60 whitespace-nowrap select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>

    {/* Row 2 — right */}
    <div className="relative mt-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee-right gap-8 py-3">
        {[...doubled].reverse().map((name, i) => (
          <span
            key={`r-${i}`}
            className="shrink-0 text-sm md:text-base font-heading font-semibold tracking-wide text-muted-foreground/60 whitespace-nowrap select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsMarquee;
