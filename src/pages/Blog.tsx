import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  { slug: "skolko-stoit-reklamnyj-rolik", title: "Сколько стоит рекламный ролик в 2025 году: разбор форматов и подходов", category: "Гайды", date: "15 марта 2026", readTime: "8 мин", excerpt: "Разбираем, из чего складывается стоимость рекламного ролика, какие форматы существуют и как выбрать подход под ваш бюджет и задачу." },
  { slug: "tiktok-vs-reels-vs-shorts", title: "TikTok, Reels или Shorts: что выбрать бизнесу и почему", category: "Сравнения", date: "10 марта 2026", readTime: "6 мин", excerpt: "Сравниваем три главные short-form платформы по аудитории, алгоритмам, форматам и эффективности для бизнеса." },
  { slug: "kak-postroit-content-zavod", title: "Как построить контент-завод: пошаговая методология Martin Media", category: "Кейсы и разборы", date: "5 марта 2026", readTime: "12 мин", excerpt: "Рассказываем, как мы выстраиваем конвейер контента для брендов: от стратегии до регулярного производства 30–100+ единиц в месяц." },
  { slug: "ai-assistenty-dlya-biznesa", title: "AI-ассистенты для бизнеса: что это и как работает", category: "Гайды", date: "28 февраля 2026", readTime: "10 мин", excerpt: "Полный гайд по AI-ассистентам: чем отличаются от чат-ботов, какие задачи решают и какие результаты ожидать." },
  { slug: "7-oshibok-videomarketinga", title: "7 ошибок видеомаркетинга, которые сливают бюджет", category: "Problem-Solution", date: "20 февраля 2026", readTime: "7 мин", excerpt: "Разбираем типичные ошибки компаний при создании видеоконтента и показываем, как их избежать." },
  { slug: "kak-ai-menyaet-marketing", title: "Как AI меняет маркетинг в 2025: 5 реальных сценариев", category: "Тренды", date: "15 февраля 2026", readTime: "9 мин", excerpt: "Не теория, а реальные примеры: как компании внедряют AI в маркетинг и какие результаты получают." },
];

const Blog = () => (
  <>
    <SEO
      title="Блог о видеомаркетинге и AI"
      description="Экспертные статьи Martin Media: видеопродакшн, TikTok, Reels, SMM-стратегии, AI-решения для бизнеса. Гайды, кейсы, разборы."
      path="/blog"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }]} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Блог</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">Экспертные материалы о видео, контенте и AI для бизнеса</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.div key={a.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${a.slug}`} className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 self-start">{a.category}</span>
                  <h2 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">{a.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-2"><Calendar size={12} />{a.date}</div>
                    <span>{a.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Blog;