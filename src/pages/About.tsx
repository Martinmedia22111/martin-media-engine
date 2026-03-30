import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Award, Zap, Globe } from "lucide-react";

const About = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">О компании</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Martin Media — это не просто агентство. Это медиа- и технологический партнёр,
              который объединяет creative production, контент-системы и AI-решения в единую экосистему
              для роста бизнеса.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Мы помогаем бизнесу продавать через видео, контент, short-form, креатив,
              системный контент-маркетинг, AI-решения и автоматизацию. Работаем с компаниями,
              которые мыслят на шаг вперёд и хотят расти через медиа и технологии.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Users, value: "40+", label: "Брендов-партнёров" },
              { icon: Award, value: "120+", label: "Реализованных проектов" },
              { icon: Zap, value: "15M+", label: "Просмотров контента" },
              { icon: Globe, value: "3+", label: "Года на рынке" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-5 rounded-2xl border border-border">
                <s.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Наш подход</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Стратегия перед продакшном", desc: "Мы не делаем контент ради контента. Каждый проект начинается со стратегии и понимания бизнес-целей." },
              { title: "Системность вместо хаоса", desc: "Выстраиваем процессы так, чтобы контент производился предсказуемо, масштабируемо и с измеримым результатом." },
              { title: "Технологии как рычаг", desc: "Используем AI и автоматизацию для ускорения процессов, снижения затрат и повышения качества." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </main>
    <Footer />
  </>
);

export default About;