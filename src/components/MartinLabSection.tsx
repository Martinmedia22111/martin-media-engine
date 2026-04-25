import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Cpu } from "lucide-react";

const MartinLabSection = () => (
  <section className="relative overflow-hidden bg-[hsl(260_25%_5%)] py-24 md:py-32">
    {/* Aurora glows: violet + red */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[160px]"
      style={{ background: 'hsl(280 90% 55% / 0.25)' }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.3 }}
      className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[180px]"
      style={{ background: 'hsl(0 85% 55% / 0.22)' }}
    />
    <div
      className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full blur-[140px]"
      style={{ background: 'hsl(220 90% 60% / 0.12)' }}
    />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(hsl(0 0% 100% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.3) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />

    {/* Top + bottom hairlines */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(280_90%_60%)]/40 to-transparent" />

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8 border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, hsl(280 90% 60% / 0.15), hsl(0 85% 55% / 0.15))',
              borderColor: 'hsl(280 90% 60% / 0.4)',
              color: 'hsl(280 90% 80%)',
            }}
          >
            <Sparkles size={14} />
            <span>Martin LAB · AI-подразделение</span>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(280 90% 70%)' }} />
          </div>

          <h2 className="font-heading font-bold leading-[0.95] tracking-tight">
            <span className="block text-white text-5xl md:text-6xl lg:text-7xl">
              AI-решения
            </span>
            <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, hsl(280 95% 70%) 0%, hsl(320 85% 60%) 50%, hsl(0 85% 55%) 100%)',
                }}
              >
                для бизнеса.
              </span>
            </span>
          </h2>

          <p className="mt-8 text-lg text-neutral-300 leading-relaxed max-w-lg">
            Martin LAB — наше AI-подразделение. Мы не просто используем AI —
            мы создаём решения, которые автоматизируют маркетинг, ускоряют
            производство контента и помогают бизнесу продавать больше.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/martin-lab">
                Узнать про AI-решения
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {[
            { icon: Bot, title: "AI-ассистенты", desc: "Отвечают клиентам, квалифицируют лиды, работают 24/7", glow: 'hsl(280 90% 60%)' },
            { icon: Cpu, title: "AI-автоматизация", desc: "Генерация контента, аналитика, оптимизация процессов", glow: 'hsl(320 85% 60%)' },
            { icon: Sparkles, title: "AI-интеграции", desc: "Внедряем AI в ваши существующие системы и процессы", glow: 'hsl(0 85% 55%)' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group relative flex gap-5 p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, hsl(260 30% 10% / 0.7), hsl(260 30% 7% / 0.7))',
                borderColor: 'hsl(280 30% 30% / 0.4)',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${item.glow}40, transparent 60%)`,
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                style={{
                  background: `linear-gradient(135deg, ${item.glow}30, ${item.glow}10)`,
                  borderColor: `${item.glow}50`,
                  color: item.glow,
                  boxShadow: `0 0 20px ${item.glow}25`,
                }}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default MartinLabSection;
