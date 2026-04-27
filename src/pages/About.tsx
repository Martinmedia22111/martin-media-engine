import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Heart, Camera, Mic, Lightbulb, Palette } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const manifestStats = [
  { value: "2015", label: "год основания" },
  { value: "3000+", label: "проектов" },
  { value: "125+", label: "клиентов" },
  { value: "100M+", label: "просмотров" },
];

const principles = [
  {
    icon: Target,
    title: "Результат, а не процесс",
    desc: "Мы измеряем работу не количеством роликов и постов, а ростом продаж, охватов и узнаваемости бренда.",
  },
  {
    icon: Sparkles,
    title: "Креатив + данные",
    desc: "Каждая идея проходит проверку аналитикой. Эмоция работает, когда подкреплена цифрами.",
  },
  {
    icon: Zap,
    title: "Скорость без потери качества",
    desc: "Собственная студия и команда полного цикла позволяют запускать проекты в разы быстрее рынка.",
  },
  {
    icon: Heart,
    title: "Личная вовлечённость",
    desc: "Погружаемся в бизнес клиента так глубоко, как если бы это был наш собственный.",
  },
];

const studioFeatures = [
  { icon: Camera, title: "Профессиональная съёмочная техника", desc: "Камеры, оптика, свет и стабилизация студийного уровня." },
  { icon: Mic, title: "Чистый звук", desc: "Звукоизоляция, петличные и студийные микрофоны, постобработка." },
  { icon: Lightbulb, title: "Световые схемы под задачу", desc: "От минималистичного интервью до полноценной рекламной сцены." },
  { icon: Palette, title: "Постпродакшн на месте", desc: "Монтаж, цветокор, графика и VFX в одной команде." },
];

const timeline = [
  { year: "2015", title: "Старт Martin Media", desc: "Команда из нескольких человек начинает с видеопродакшна в Минске." },
  { year: "2018", title: "Полный цикл", desc: "Добавляем стратегию, креатив, SMM и performance — становимся агентством полного цикла." },
  { year: "2021", title: "Награда YouTube", desc: "Получаем серебряную кнопку YouTube за работу с авторскими каналами и брендами." },
  { year: "2023", title: "Запуск Martin Lab", desc: "Открываем R&D-направление по AI-видео, генеративному контенту и нейросетям в маркетинге." },
  { year: "Сегодня", title: "14 человек, 3000+ проектов", desc: "Работаем с банками, FMCG, ритейлом и tech-брендами Беларуси, СНГ и Европы." },
];

const About = () => (
  <>
    <SEO
      title="О компании"
      description="Martin Media — рекламное агентство полного цикла из Минска. С 2015 года, 3000+ проектов, 125+ клиентов, награда YouTube. Стратегия, видео, SMM, performance, AI."
      path="/o-kompanii"
    />
    <LocalBusinessJsonLd />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "О компании", url: "/o-kompanii" }]} />
    <Header />
    <main>
      {/* HERO MANIFEST — насыщенный фиолетовый градиент в духе Martin Lab */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background:
            'linear-gradient(180deg, hsl(265 50% 8%) 0%, hsl(275 55% 11%) 45%, hsl(290 50% 9%) 100%)',
        }}
      >
        {/* Фиолетовый орб */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[5%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[170px]"
          style={{ background: 'hsl(280 95% 62% / 0.32)' }}
        />
        {/* Мажента-орб */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px]"
          style={{ background: 'hsl(320 90% 58% / 0.24)' }}
        />
        {/* Красный акцент — связка с брендом */}
        <div
          className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: 'hsl(0 90% 58% / 0.16)' }}
        />
        {/* Голубовато-фиолетовое свечение сверху для глубины */}
        <div
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'hsl(255 85% 62% / 0.18)' }}
        />

        {/* Сетка */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Верхняя и нижняя тонкие фиолетовые линии */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(280_90%_60%)]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(320_85%_60%)]/30 to-transparent" />

        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Breadcrumbs items={[{ name: "Главная", url: "/" }, { name: "О компании" }]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8 border backdrop-blur-sm"
            style={{
              background: 'hsl(280 90% 60% / 0.12)',
              borderColor: 'hsl(280 90% 60% / 0.35)',
              color: 'hsl(285 95% 80%)',
            }}
          >
            <Sparkles size={14} />
            <span>О компании · С 2015 года</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold leading-[0.95] tracking-tight max-w-5xl"
          >
            <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Мы делаем,
            </span>
            <span className="block text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
              чтобы бренды{" "}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, hsl(280 95% 75%) 0%, hsl(320 85% 65%) 50%, hsl(0 85% 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                росли.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
          >
            Martin Media — это команда стратегов, креаторов, режиссёров и маркетологов,
            которая девять лет превращает идеи брендов в видео, контент и кампании,
            работающие на бизнес-результат.
          </motion.p>

          {/* Stats — стеклянная плашка с фиолетовой обводкой */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border max-w-4xl backdrop-blur-sm"
            style={{
              background: 'hsl(280 40% 50% / 0.15)',
              borderColor: 'hsl(280 60% 60% / 0.20)',
            }}
          >
            {manifestStats.map((s) => (
              <div key={s.label} className="bg-transparent p-6 md:p-8">
                <div className="font-heading text-3xl md:text-5xl font-bold text-white">{s.value}</div>
                <div className="text-xs md:text-sm text-neutral-400 mt-2 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MANIFEST STATEMENT */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Наш манифест</p>
            <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
              Реклама <span className="text-primary">— не искусство ради искусства.</span>
              <br />
              Это инструмент роста.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 pt-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Мы не делим работу на «креатив» и «продакшн», на «стратегию» и «исполнение».
                В Martin Media всё это собрано в одну систему — от первой идеи до последнего
                кадра, от позиционирования бренда до настройки рекламного кабинета.
              </p>
              <p>
                Поэтому к нам приходят, когда нужен не подрядчик на одну задачу,
                а партнёр, который возьмёт на себя коммуникацию бренда целиком —
                и будет отвечать за результат цифрами, а не отчётами о проделанной работе.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section-padding bg-secondary/40">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14 md:mb-20"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">Принципы</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight">
              Четыре правила, по которым мы работаем
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card p-8 md:p-10 group hover:bg-accent/40 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <p.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14 md:mb-20"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">История</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight">
              Девять лет роста — шаг за шагом
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-16">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 items-start ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 w-[31px] h-[31px] md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="font-heading text-3xl md:text-5xl font-bold text-primary">{t.year}</div>
                  </div>
                  <div className={`pl-12 md:pl-0 mt-2 md:mt-0 ${i % 2 === 0 ? "md:pl-8" : "md:text-right md:pr-8"}`}>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{t.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO / BACKSTAGE */}
      <section className="section-padding gradient-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.12] blur-[150px]" />

        <div className="container max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">Студия</p>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                Собственная видеостудия в Минске
              </h2>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                Полностью оборудованная площадка под съёмки рекламы, корпоративного видео,
                интервью и контента для соцсетей. Закрываем весь цикл — от подготовки
                сцены до финального монтажа — внутри одной команды.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Это значит меньше согласований с подрядчиками, быстрее запуск
                и предсказуемое качество от проекта к проекту.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {studioFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-transparent p-6 md:p-8"
                >
                  <f.icon size={24} className="text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" title="Начните сотрудничество с нами" subtitle="Оставьте заявку, и мы предложим вам индивидуальное решение" />
    </main>
    <Footer />
  </>
);

export default About;
