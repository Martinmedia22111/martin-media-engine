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
  { icon: TrendingUp, metric: "×3", title: "Рост охватов", description: "Системный контент даёт в среднем трёхкратный прирост аудитории за квартал" },
  { icon: Target, metric: "−40", metricSuffix: "%", title: "Стоимость лида", description: "Видеоконтент конвертирует дешевле статики и дольше работает в ленте" },
  { icon: Rocket, metric: "2–4", metricSuffix: " нед.", title: "Запуск проекта", description: "От брифа до первых публикаций и измеримых результатов" },
  { icon: Bot, metric: "24/7", title: "AI-ассистенты", description: "Работают без выходных, перерывов и человеческого фактора" },
  { icon: Layers, metric: "1", metricSuffix: " команда", title: "Полный цикл", description: "Стратегия, продакшн и дистрибуция в одном контракте" },
  { icon: BarChart3, metric: "100", metricSuffix: "%", title: "Прозрачность", description: "Метрики и сквозная аналитика доступны с первого месяца" },
];

const ResultsSection = () => (
  <section className="relative overflow-hidden bg-[hsl(220_13%_91%)] py-24 md:py-32">
    {/* Bordeaux radial accents */}
    <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[hsl(0_70%_35%)]/20 blur-[160px]" />
    <div className="absolute bottom-[-10%] right-[-8%] w-[550px] h-[550px] rounded-full bg-[hsl(0_75%_30%)]/18 blur-[150px]" />
    <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[hsl(350_60%_40%)]/12 blur-[180px]" />
    {/* Diagonal bordeaux gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsl(0_50%_40%)]/[0.04] to-[hsl(0_60%_25%)]/[0.10] pointer-events-none" />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(hsl(0 0% 0% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.4) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />

    <div className="container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Результаты
        </div>
        <h2 className="font-heading font-bold text-neutral-950 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Что получает <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(0 85% 55%) 0%, hsl(0 65% 38%) 100%)',
            }}
          >
            бизнес.
          </span>
        </h2>
        <p className="mt-6 text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed">
          Не просто контент, а измеримый рост бизнес-показателей.
        </p>
      </motion.div>

      {/* Diagonal grid: each row offset for rhythm */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200/70 rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_40px_100px_-30px_hsl(220_30%_20%/0.18)]">
        {results.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-white hover:bg-[hsl(30_30%_98%)] transition-colors p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
            >
              {/* Top red line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/40 transition-all">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-heading text-xs uppercase tracking-widest text-neutral-400">
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
                        'linear-gradient(135deg, hsl(0 85% 55%) 0%, hsl(0 70% 42%) 100%)',
                    }}
                  >
                    {r.metric}
                  </span>
                  {r.metricSuffix && (
                    <span className="text-2xl md:text-3xl text-neutral-950 ml-1">
                      {r.metricSuffix}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading font-semibold text-neutral-950 text-lg">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
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
