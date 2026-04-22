import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Users, Award, Zap, Globe, Calendar, Video, UserCheck } from "lucide-react";
import { companyInfo, teamStats } from "@/data/company";
import Breadcrumbs from "@/components/Breadcrumbs";

const About = () => (
  <>
    <SEO
      title="О компании"
      description="Martin Media — агентство видеомаркетинга полного цикла из Минска. С 2015 года, команда 14 профессионалов, 3000+ реализованных проектов, 125+ довольных клиентов."
      path="/o-kompanii"
    />
    <LocalBusinessJsonLd />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "О компании", url: "/o-kompanii" }]} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ name: "Главная", url: "/" }, { name: "О компании" }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">О компании</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Martin Media — агентство видеомаркетинга полного цикла из Минска.
              С 2015 года мы специализируемся на видеосъёмке и продвижении видео
              в социальных сетях на платформах TikTok, Instagram и YouTube.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Мы помогаем бизнесу расти через видеоконтент: от рекламных роликов
              и корпоративных фильмов до TikTok-продвижения, SMM-стратегий,
              AI-видео и съёмки с квадрокоптера. Наша команда из 14 профессионалов
              создаёт уникальный контент, который помогает донести сообщение до
              целевой аудитории и выделиться на фоне конкурентов.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Calendar, value: "С 2015", label: "Года на рынке" },
              { icon: Users, value: "14", label: "Человек в команде" },
              { icon: UserCheck, value: "125+", label: "Довольных клиентов" },
              { icon: Video, value: "300+", label: "Видеороликов" },
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
          <h2 className="text-3xl font-bold text-foreground mb-8">Наши преимущества</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Личная вовлечённость", desc: "Тщательно анализируем и погружаемся в ваш бизнес" },
              { title: "Лучшие цены", desc: "Гибкость в ценах, чтобы каждый мог получить профессиональное качество" },
              { title: "Высокое качество", desc: "Используем лучшую технику для качественной картинки и звука" },
              { title: "Собственная студия", desc: "Полностью оборудованная и укомплектованная видеостудия" },
              { title: "Креативные идеи", desc: "Создаём то, чего ещё нет на рынке" },
              { title: "Чистый звук", desc: "Профессиональное оборудование для идеального звука" },
              { title: "Спецусловия", desc: "Для каждого клиента подбираем персональный пакет услуг" },
              { title: "Уникальный дизайн", desc: "Профессиональный дизайнер в команде" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Какие результаты мы обеспечиваем</h2>
          <ul className="space-y-3">
            {[
              "Увеличиваем охват аудитории, знакомя больше людей с вашим брендом",
              "Способствуем росту повторных продаж через регулярное взаимодействие с клиентами",
              "Помогаем выделиться на фоне конкурентов, создавая маркетинговые стратегии, основанные на доверии",
              "Продвигаем ваши товары и услуги на рынке через видеоконтент",
              "Организуем съёмочный процесс с нуля — от разработки концепции до финальной обработки",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection variant="dark" title="Начните сотрудничество с нами" subtitle="Оставьте заявку, и мы предложим вам индивидуальное решение" />
    </main>
    <Footer />
  </>
);

export default About;