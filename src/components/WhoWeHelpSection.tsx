import { motion } from "framer-motion";
import AudienceSceneIcon, { type AudienceSceneKey } from "./AudienceSceneIcon";

const segments: { scene: AudienceSceneKey; title: string; description: string }[] = [
  {
    scene: "brands",
    title: "Бренды, которым нужен системный видеоконтент",
    description: "Выстроим производство контента как предсказуемый процесс",
  },
  {
    scene: "vertical",
    title: "Компании, выходящие в TikTok и Reels",
    description: "Стратегия, производство и аналитика вертикального контента",
  },
  {
    scene: "ai",
    title: "Бизнесы, внедряющие AI в маркетинг",
    description: "AI-ассистенты, автоматизация, интеграции с вашими процессами",
  },
  {
    scene: "cmo",
    title: "Маркетинг-директора, ищущие сильного партнёра",
    description: "Одна команда вместо пяти подрядчиков — продакшн, контент, AI",
  },
];

const WhoWeHelpSection = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Кому мы помогаем</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Работаем с компаниями, которые хотят расти через медиа, контент и технологии
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {segments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col items-center text-center p-6 pt-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 mb-5 transition-transform duration-500 group-hover:scale-110">
              <AudienceSceneIcon scene={item.scene} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelpSection;
