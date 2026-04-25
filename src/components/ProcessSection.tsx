import { motion } from "framer-motion";
import { FileText, Lightbulb, Film, Rocket, BarChart3 } from "lucide-react";

// Monochrome dark with red accent
const stepGradient = "from-[#1f2937] to-[#0b0f17]"; // slate-800 → near-black
const stepGlow = "shadow-[0_10px_40px_-10px_rgba(220,38,38,0.45)]";

const steps = [
  {
    icon: FileText,
    title: "Бриф",
    description: "Разбираемся в задаче, целях и аудитории вашего бизнеса",
    gradient: stepGradient,
    glow: stepGlow,
  },
  {
    icon: Lightbulb,
    title: "Стратегия",
    description: "Формируем подход, концепцию и план действий",
    gradient: stepGradient,
    glow: stepGlow,
  },
  {
    icon: Film,
    title: "Продакшн",
    description: "Создаём контент: видео, графика, тексты, AI-решения",
    gradient: stepGradient,
    glow: stepGlow,
  },
  {
    icon: Rocket,
    title: "Запуск",
    description: "Запускаем в работу, интегрируем с вашими процессами",
    gradient: stepGradient,
    glow: stepGlow,
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Измеряем результат и оптимизируем на основе данных",
    gradient: stepGradient,
    glow: stepGlow,
  },
];

const ProcessSection = () => (
  <section className="section-padding gradient-red-subtle relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Как мы работаем</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Прозрачный процесс от первого звонка до измеримого результата
        </p>
      </motion.div>

      {/* Desktop: horizontal connected timeline */}
      <div className="hidden md:block relative">
        {/* Animated connecting line */}
        <div className="absolute top-[52px] left-[10%] right-[10%] h-[3px] rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ef4444] via-[#a855f7] to-[#10b981] opacity-30" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-[#ef4444] via-[#a855f7] to-[#10b981]"
          />
        </div>

        <div className="grid grid-cols-5 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circle with icon */}
              <div className="relative mb-6">
                {/* Outer ring on hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                <div
                  className={`relative w-[104px] h-[104px] rounded-full bg-gradient-to-br ${step.gradient} ${step.glow} flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ring-4 ring-background`}
                >
                  <step.icon size={36} strokeWidth={2} />
                </div>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-background border-2 border-foreground/10 text-foreground text-sm font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical connected timeline */}
      <div className="md:hidden relative">
        <div className="absolute left-[34px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#ef4444] via-[#a855f7] to-[#10b981] rounded-full opacity-40" />
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="relative flex-shrink-0">
                <div
                  className={`w-[68px] h-[68px] rounded-full bg-gradient-to-br ${step.gradient} ${step.glow} flex items-center justify-center text-white ring-4 ring-background`}
                >
                  <step.icon size={26} strokeWidth={2} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-foreground/10 text-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
