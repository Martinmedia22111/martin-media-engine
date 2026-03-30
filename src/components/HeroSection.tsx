import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { stats } from "@/data/company";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero pt-20">
    {/* Decorative elements */}
    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[150px]" />
    <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
    <div className="absolute top-1/2 right-[15%] w-40 h-40 border border-primary/10 rounded-full" />
    <div className="absolute top-[25%] right-[8%] w-20 h-20 border border-primary/20 rounded-full" />
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

    <div className="container relative z-10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            С 2015 года · Видео · Контент · AI
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">Martin Media — </span>
            <span className="text-primary">creative-tech partner</span>
            <br />
            <span className="text-white">для брендов, которым</span>
            <br />
            <span className="text-white">нужен </span>
            <span className="text-primary">рост</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
        >
          Контент, видеопродакшн, short-form, SMM, 3D и AI-решения,
          собранные в единую систему маркетинга и коммуникации.
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
        className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
