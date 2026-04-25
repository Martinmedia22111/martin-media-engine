import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket, Bot, Layers, BarChart3, type LucideIcon } from "lucide-react";

type Result = {
  icon: LucideIcon;
  metric: string;
  metricSuffix?: string;
  title: string;
  description: string;
};

const results: Result[] = [
  { icon: TrendingUp, metric: "200", metricSuffix: "–400%", title: "Рост охватов", description: "Системный контент вместо разовых публикаций" },
  { icon: Target, metric: "−40", metricSuffix: "%", title: "Стоимость лида", description: "Видеоконтент конвертирует лучше статики" },
  { icon: Rocket, metric: "2–4", metricSuffix: " нед.", title: "Запуск проекта", description: "От брифа до первых результатов" },
  { icon: Bot, metric: "24/7", title: "AI-ассистенты", description: "Работают без выходных и перерывов" },
  { icon: Layers, metric: "1", metricSuffix: " команда", title: "Полный цикл", description: "Стратегия → продакшн → дистрибуция" },
  { icon: BarChart3, metric: "100", metricSuffix: "%", title: "Прозрачность", description: "Метрики и аналитика с первого месяца" },
];

const ResultsSection = () => (
  <section className="relative overflow-hidden bg-[hsl(0_8%_6%)] py-24 md:py-32">
    {/* Background glows */}
    <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[160px]" />
    <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[140px]" />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />

    <div className="container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Результаты
        </div>
        <h2 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Что получает <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(0 85% 60%) 0%, hsl(0 65% 42%) 100%)',
            }}
          >
            бизнес.
          </span>
        </h2>
        <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-relaxed">
          Не просто контент, а измеримый рост бизнес-показателей.
        </p>
      </motion.div>

      {/* Diagonal grid: each row offset for rhythm */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
        {results.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-[hsl(0_10%_8%)] hover:bg-[hsl(0_15%_10%)] transition-colors p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
            >
              {/* Top red line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/40 transition-all">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-heading text-xs uppercase tracking-widest text-neutral-600">
                  0{i + 1}
                </span>
              </div>

              {/* Big metric */}
              <div className="mt-8">
                <div className="font-heading font-bold tracking-tighter leading-none flex items-baseline">
                  <span
                    className="text-6xl md:text-7xl bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 75%) 100%)',
                    }}
                  >
                    {r.metric}
                  </span>
                  {r.metricSuffix && (
                    <span className="text-2xl md:text-3xl text-primary ml-1">
                      {r.metricSuffix}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading font-semibold text-white text-lg">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-destructive-foreground">
                  {r.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ResultsSection;
