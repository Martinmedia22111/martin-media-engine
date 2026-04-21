import { motion } from "framer-motion";
import ResultDuotoneIcon, { type ResultIconKey } from "./ResultDuotoneIcon";

const results: { icon: ResultIconKey; title: string; description: string }[] = [
  { icon: "growth", title: "Рост охватов на 200–400%", description: "Системный контент вместо разовых публикаций" },
  { icon: "lead-cost", title: "Снижение стоимости лида", description: "Видеоконтент конвертирует лучше статики" },
  { icon: "fast-launch", title: "Запуск за 2–4 недели", description: "От брифа до первых результатов" },
  { icon: "ai-247", title: "AI работает 24/7", description: "Ассистенты, которые не берут выходных" },
  { icon: "full-cycle", title: "Полный цикл в одной команде", description: "Стратегия → продакшн → дистрибуция" },
  { icon: "measurable", title: "Измеримый результат", description: "Метрики и аналитика с первого месяца" },
];

const ResultsSection = () => (
  <section className="section-padding gradient-warm relative overflow-hidden">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Что получает бизнес</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Не просто контент, а рост бизнес-показателей
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex flex-col items-center text-center p-6 pt-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 mb-5 transition-transform duration-500 group-hover:scale-110">
              <ResultDuotoneIcon icon={r.icon} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
