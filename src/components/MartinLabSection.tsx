import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Cpu } from "lucide-react";

const MartinLabSection = () => (
  <section className="section-padding bg-foreground text-background overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles size={14} /> Martin LAB
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI-решения
            <br />
            <span className="text-primary">для бизнеса</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed max-w-lg">
            Martin LAB — наше AI-подразделение. Мы не просто используем AI —
            мы создаём решения, которые автоматизируют маркетинг, ускоряют
            производство контента и помогают бизнесу продавать больше.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/martin-lab">
                Узнать про AI-решения <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {[
            { icon: Bot, title: "AI-ассистенты", desc: "Отвечают клиентам, квалифицируют лиды, работают 24/7" },
            { icon: Cpu, title: "AI-автоматизация", desc: "Генерация контента, аналитика, оптимизация процессов" },
            { icon: Sparkles, title: "AI-интеграции", desc: "Внедряем AI в ваши существующие системы и процессы" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-background">{item.title}</h3>
                <p className="text-sm text-neutral-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default MartinLabSection;