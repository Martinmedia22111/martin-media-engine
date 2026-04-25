import { motion } from "framer-motion";
import AudienceSceneIcon, { type AudienceSceneKey } from "./AudienceSceneIcon";

const segments: { scene: AudienceSceneKey; title: string }[] = [
  { scene: "brands", title: "Брендам — сильный маркетинг" },
  { scene: "vertical", title: "Бизнесу — рост через digital" },
  { scene: "ai", title: "Компаниям — AI в маркетинге" },
  { scene: "cmo", title: "CMO — партнёр полного цикла" },
];

const WhoWeHelpSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Кому мы помогаем</h2>
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Маркетинговое агентство полного цикла: реклама, digital, performance, SEO, видеопродакшн и AI
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {segments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 transition-transform duration-500 group-hover:scale-110">
              <AudienceSceneIcon scene={item.scene} />
            </div>
            <h3 className="font-heading font-semibold text-base md:text-lg text-foreground leading-tight">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelpSection;
