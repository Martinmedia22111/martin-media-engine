import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { stats } from "@/data/company";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-24 pb-16">
    {/* Animated red orb */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.18] blur-[180px]"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[150px]"
    />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(hsl(0 0% 100% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.15) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    />

    {/* Diagonal accent line */}
    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

    <div className="container relative z-10">
      <div className="max-w-6xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/30 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-primary" />
          <span>С 2015 · Видео · Контент · AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Headline — экспрессивная типографика */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold leading-[0.95] tracking-tight"
        >
          <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Martin Media —
          </span>
          <span className="block text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
            помогаем брендам расти.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
        >
          Рекламное агентство полного цикла: стратегия, креатив, видеопродакшн,
          SMM, performance и AI-решения — собранные в единую систему маркетинга и коммуникации.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button asChild variant="hero" size="xl" className="group">
            <Link to="/brief">
              Рассчитать стоимость
              <ArrowRight
                className="ml-1 transition-transform group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </Button>
          <Button asChild variant="hero-outline" size="xl">
            <Link to="/kejsy">Смотреть кейсы</Link>
          </Button>
        </motion.div>
      </div>

      {/* Stats — минималистичная лента с красной верхней чертой */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            className="relative group px-6 py-8 bg-[hsl(0_10%_8%)] hover:bg-[hsl(0_15%_10%)] transition-colors"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-400 mt-2 leading-tight">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
