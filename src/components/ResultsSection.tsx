import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Zap, Target, BarChart } from "lucide-react";

const results = [
  { icon: TrendingUp, title: "Рост охватов на 200–400%", description: "Системный контент вместо разовых публикаций" },
  { icon: DollarSign, title: "Снижение стоимости лида", description: "Видеоконтент конвертирует лучше статики" },
  { icon: Clock, title: "Запуск за 2–4 недели", description: "От брифа до первых результатов" },
  { icon: Zap, title: "AI работает 24/7", description: "Ассистенты, которые не берут выходных" },
  { icon: Target, title: "Полный цикл в одной команде", description: "Стратегия → продакшн → дистрибуция" },
  { icon: BarChart, title: "Измеримый результат", description: "Метрики и аналитика с первого месяца" },
];

const ResultsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
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
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <r.icon size={22} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1.5">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;