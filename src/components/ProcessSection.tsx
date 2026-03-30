import { motion } from "framer-motion";
import { FileText, Lightbulb, Film, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { icon: FileText, title: "Бриф", description: "Разбираемся в задаче, целях и аудитории вашего бизнеса" },
  { icon: Lightbulb, title: "Стратегия", description: "Формируем подход, концепцию и план действий" },
  { icon: Film, title: "Продакшн", description: "Создаём контент: видео, графика, тексты, AI-решения" },
  { icon: Rocket, title: "Запуск", description: "Запускаем в работу, интегрируем с вашими процессами" },
  { icon: BarChart3, title: "Аналитика", description: "Измеряем результат и оптимизируем на основе данных" },
];

const ProcessSection = () => (
  <section className="section-padding gradient-red-subtle relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[100px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Как мы работаем</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Прозрачный процесс от первого звонка до измеримого результата
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
              {i + 1}
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mt-2 mb-4">
              <step.icon size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
