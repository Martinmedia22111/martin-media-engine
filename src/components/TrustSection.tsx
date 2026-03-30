import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { stats, teamStats } from "@/data/company";

const testimonials = [
  {
    text: "Martin Media создали для нас серию рекламных роликов, которые значительно усилили нашу digital-стратегию. Профессиональный подход на каждом этапе.",
    author: "Маркетинг-директор",
    role: "Белагропромбанк",
  },
  {
    text: "Ребята выстроили нам TikTok с нуля — от стратегии до регулярного контента. Результат превзошёл ожидания: охваты и вовлечённость выросли кратно.",
    author: "Бренд-менеджер",
    role: "Крупный FMCG-бренд",
  },
  {
    text: "Работаем с Martin Media уже несколько лет. Ценим за скорость, качество и умение работать с разными форматами — от рекламы до AI-видео.",
    author: "Руководитель маркетинга",
    role: "Belkart",
  },
];

const TrustSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
      {/* Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
      >
        {[
          { value: "187+", label: "Реализованных проектов" },
          { value: "125+", label: "Довольных клиентов" },
          { value: "100M+", label: "Просмотров контента" },
          { value: "9+", label: "Лет на рынке" },
        ].map((n) => (
          <div key={n.label} className="text-center">
            <div className="font-heading text-3xl md:text-5xl font-bold text-primary">{n.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{n.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Что говорят клиенты</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border"
          >
            <Quote size={24} className="text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
            <div>
              <div className="font-heading font-semibold text-foreground text-sm">{t.author}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;