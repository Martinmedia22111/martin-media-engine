import { motion } from "framer-motion";
import { Users, TrendingUp, Cpu, Briefcase } from "lucide-react";

const segments = [
  {
    icon: Users,
    title: "Бренды, которым нужен системный видеоконтент",
    description: "Выстроим производство контента как предсказуемый процесс",
  },
  {
    icon: TrendingUp,
    title: "Компании, выходящие в TikTok и Reels",
    description: "Стратегия, производство и аналитика вертикального контента",
  },
  {
    icon: Cpu,
    title: "Бизнесы, внедряющие AI в маркетинг",
    description: "AI-ассистенты, автоматизация, интеграции с вашими процессами",
  },
  {
    icon: Briefcase,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {segments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="block p-6 md:p-8 rounded-2xl border border-border bg-card relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelpSection;
