import { motion } from "framer-motion";
import AudienceSceneIcon, { type AudienceSceneKey } from "./AudienceSceneIcon";

const segments: { scene: AudienceSceneKey; title: string }[] = [
  { scene: "brands", title: "Брендам — сильный маркетинг" },
  { scene: "vertical", title: "Бизнесу — рост через digital" },
  { scene: "ai", title: "Компаниям — AI в маркетинге" },
  { scene: "cmo", title: "CMO — партнёр полного цикла" },
];

const WhoWeHelpSection = () => (
  <section className="py-12 md:py-16 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Кому мы помогаем</h2>
        <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
          Маркетинговое агентство полного цикла: реклама, digital, performance, SEO, видеопродакшн и AI
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {segments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 transition-transform duration-500 group-hover:scale-110">
              <AudienceSceneIcon scene={item.scene} />
            </div>
            <h3 className="font-heading font-semibold text-sm md:text-base text-foreground leading-tight">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelpSection;
