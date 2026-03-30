import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { stats } from "@/data/company";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-20">
    {/* Decorative bg */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
    <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
    <div className="absolute top-1/2 right-[10%] w-32 h-32 border border-primary/10 rounded-full" />
    <div className="absolute top-[30%] right-[5%] w-16 h-16 border border-primary/20 rounded-full" />

    <div className="container relative z-10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            С 2015 года · Видео · Контент · AI
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Создаём видео,
            <br />
            <span className="text-primary">которые продают</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Martin Media — агентство видеомаркетинга полного цикла.
          Видеопродакшн, TikTok, Reels, рекламные ролики, SMM, AI-видео
          и продвижение для бизнеса с 2015 года.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/brief">
              Рассчитать стоимость <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
          <Button asChild variant="hero-outline" size="xl">
            <Link to="/kejsy">Смотреть кейсы</Link>
          </Button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-8"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;