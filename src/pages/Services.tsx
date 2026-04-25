import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import ServiceTypoIcon from "@/components/ServiceTypoIcon";
import Breadcrumbs from "@/components/Breadcrumbs";

const servicesFAQ = [
  {
    question: "Какие услуги вы оказываете?",
    answer:
      "Martin Media — рекламное агентство полного цикла: видеопродакшн, рекламные ролики, TikTok и Reels, SMM, performance-маркетинг, 3D/VFX, AI-решения, разработка ботов и сайтов, PR. Полный список — в каталоге выше.",
  },
  {
    question: "Можно ли заказать одну услугу или только пакет?",
    answer:
      "Можно и то, и другое. Берём как разовые проекты (например, один ролик или серия Reels), так и комплексное сопровождение: стратегия + продакшн + дистрибуция. Комплексный подход обычно даёт кратно больший результат.",
  },
  {
    question: "Сколько стоит услуга?",
    answer:
      "Цена зависит от задачи, формата, объёма работ, сроков и состава команды. Мы не публикуем прайс, потому что одинаковая по названию услуга может отличаться в 5–10 раз. После брифа в течение 1–2 дней присылаем смету и тайминг.",
  },
  {
    question: "Сколько времени занимает запуск проекта?",
    answer:
      "Обычно стартуем в течение 3–5 рабочих дней после согласования брифа и договора. Сроки реализации зависят от услуги: Reels — от 5–7 дней, рекламный ролик — от 3–4 недель, комплексный SMM — стартует в течение 1–2 недель.",
  },
  {
    question: "Работаете ли вы с компаниями за пределами Беларуси?",
    answer:
      "Да. Мы работаем с клиентами из Беларуси, России, Казахстана, ЕС и других стран. Большую часть процессов ведём удалённо, на съёмки выезжаем по согласованию.",
  },
  {
    question: "Подходят ли ваши услуги малому бизнесу?",
    answer:
      "Да. У нас есть форматы и под крупные бренды (TV-ролики, федеральные кампании), и под малый бизнес (короткие Reels, контент-абонементы, таргет). Подбираем решение под задачу и бюджет.",
  },
  {
    question: "Как вы измеряете результат?",
    answer:
      "На старте согласовываем KPI: охваты, просмотры, стоимость лида, конверсии, ER, рост подписчиков и т.д. Регулярно присылаем отчёты с цифрами и выводами, корректируем стратегию по данным.",
  },
  {
    question: "Какие гарантии и что входит в договор?",
    answer:
      "Работаем по официальному договору, при необходимости — NDA. В договоре фиксируем объём работ, сроки, количество правок, условия оплаты и передачи прав на материалы. Все исходники и права передаём заказчику.",
  },
];

const Services = () => (
  <>
    <SEO
      title="Услуги рекламного агентства"
      description="Полный спектр услуг Martin Media как рекламного агентства полного цикла: стратегия и креатив, видеопродакшн, рекламные ролики, TikTok и Reels, SMM, performance, 3D/VFX, AI-решения. Минск, Беларусь."
      path="/uslugi"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Услуги", url: "/uslugi" }]} />
    <FAQJsonLd items={servicesFAQ} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background pb-8">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ name: "Главная", url: "/" }, { name: "Услуги" }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Услуги</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Полный спектр услуг рекламного агентства — от стратегии и креатива до видеопродакшна, SMM и AI-решений
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
          >
            {[
              { value: "3000+", label: "Реализованных проектов" },
              { value: "125+", label: "Довольных клиентов" },
              { value: "100M+", label: "Просмотров контента" },
              { value: "9+", label: "Лет на рынке" },
            ].map((n) => (
              <div key={n.label} className="text-center">
                <div className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {n.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{n.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-20 z-30 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="container">
          <nav className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {serviceCategories.map((cat) => {
              const has = services.some((s) => s.category === cat.id);
              if (!has) return null;
              return (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(`cat-${cat.id}`);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 140;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="shrink-0 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {cat.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <section className="section-padding bg-background pt-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCategories.map((cat) => {
              const catServices = services.filter((s) => s.category === cat.id);
              if (catServices.length === 0) return null;
              return (
                <div key={cat.id} className="contents">
                  <div id={`cat-${cat.id}`} className="col-span-full mt-6 first:mt-0 scroll-mt-40">
                    <h2 className="text-2xl font-bold text-foreground">{cat.label}</h2>
                    <p className="text-muted-foreground mt-1">{cat.description}</p>
                  </div>
                  {catServices.map((s, i) => (
                    <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                      <Link
                        to={`/uslugi/${s.slug}`}
                        className="group flex flex-col h-full rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                      >
                        <div
                          className="relative flex items-center justify-center h-28 border-b border-border/60 px-4 overflow-hidden"
                          style={{
                            backgroundColor: "#e0e4e8",
                            backgroundImage: [
                              "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 38%, rgba(0,0,0,0.02) 62%, rgba(0,0,0,0.05) 100%)",
                              "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.35) 100%)",
                              "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)",
                              "linear-gradient(160deg, #ecf0f3 0%, #d8dce0 50%, #c4c9ce 100%)",
                            ].join(", "),
                          }}
                        >
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
                            style={{
                              background:
                                "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
                            }}
                          />
                          <ServiceTypoIcon slug={s.slug} className="relative text-[44px] sm:text-[48px] drop-shadow-sm" />
                        </div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="font-heading font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                            {s.shortTitle}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 flex-1">
                            {s.description}
                          </p>
                          <div className="mt-4 flex justify-center">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                              Подробнее
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
