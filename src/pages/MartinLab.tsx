import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Cpu, Sparkles, Zap, ArrowRight } from "lucide-react";

const MartinLab = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} /> Martin LAB
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI-решения <span className="text-primary">для бизнеса</span></h1>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Martin LAB — AI-подразделение Martin Media. Мы создаём решения, которые автоматизируют
              маркетинг, ускоряют производство контента и помогают бизнесу масштабироваться.
            </p>
            <div className="mt-8">
              <Button asChild variant="hero" size="lg"><Link to="/brief">Обсудить AI-проект <ArrowRight size={16} className="ml-1" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Что мы делаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "AI-ассистенты", desc: "Умные ассистенты для клиентского сервиса, продаж и внутренних процессов. Работают 24/7, обучаются на данных вашей компании.", link: "/uslugi/ai-assistenty" },
              { icon: Cpu, title: "AI-автоматизация", desc: "Внедряем AI в маркетинг и бизнес-процессы. Генерация контента, аналитика, оптимизация воронок, персонализация.", link: "/uslugi/ai-integracii" },
              { icon: Zap, title: "AI + Контент", desc: "Используем AI для ускорения производства контента: сценарии, монтаж, адаптации, A/B-тестирование.", link: "/uslugi/content-systemy" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={item.link} className="group block p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Почему Martin LAB?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Не просто внедряем инструменты — решаем бизнес-задачи",
              "Используем лучшие AI-модели: OpenAI, Anthropic, open-source",
              "Интегрируем с вашими CRM, мессенджерами и процессами",
              "Обучаем команду работать с AI самостоятельно",
            ].map((item) => (
              <div key={item} className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Готовы внедрить AI?" subtitle="Расскажите о задаче — проведём бесплатный AI-аудит" variant="dark" />
    </main>
    <Footer />
  </>
);

export default MartinLab;