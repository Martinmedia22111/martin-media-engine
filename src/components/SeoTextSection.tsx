import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * SEO-текстовый блок на главной странице.
 * Содержит 400-600 слов с основными коммерческими ключами.
 * Оформлен как аккордеон: интро видно сразу, разделы раскрываются по клику.
 * Весь текст остаётся в DOM — поисковики индексируют контент полностью.
 */
const SeoTextSection = () => (
  <section className="section-padding bg-background border-t border-border/50">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Рекламное агентство полного цикла в Минске: от стратегии до результата в бизнесе
        </h2>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-4">
            <strong className="text-foreground">Martin Media</strong> — рекламное агентство полного цикла, которое с 2015 года помогает брендам расти в Беларуси, России и странах СНГ. Мы закрываем все задачи коммуникации в одном месте: разрабатываем стратегии и креатив, производим видео и контент, ведём SMM и performance-маркетинг, внедряем AI-решения. За девять лет работы мы реализовали более 3000 проектов для 125+ клиентов — от локальных брендов до Volkswagen, Coca-Cola, Белагропромбанка и Domino's.
          </p>

          <p className="mb-8">
            Современный видеомаркетинг — это не просто красивая картинка. Это инструмент, который измеряется в конверсиях, охватах, стоимости лида и бизнес-метриках. Поэтому каждый проект мы начинаем с брифа и стратегии: разбираемся в задаче клиента, целевой аудитории, конкурентной среде и KPI. Только после этого переходим к созданию сценария, съёмке и пост-продакшну.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services">
            <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-foreground hover:no-underline">
              Какие услуги видеомаркетинга мы оказываем
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                <strong className="text-foreground">Заказать рекламный ролик</strong> для ТВ, YouTube или соцсетей — наша основная специализация. Мы снимаем в собственной студии в Минске и на локациях: производим имиджевые видео, продуктовые ролики, food-видео и корпоративные фильмы. Для компаний, которым нужен системный вертикальный контент, мы выстраиваем конвейер short-form-продакшна: стратегия, съёмка серий по 10–30 роликов в день, монтаж с субтитрами под silent-first просмотр, аналитика и оптимизация.
              </p>
              <p>
                Параллельно с продакшном работаем с SMM и контент-стратегией: ведём аккаунты клиентов в Instagram, TikTok, Telegram и YouTube, разрабатываем контент-планы, проводим аудит и запускаем таргетированную рекламу. Для задач, где нужны визуальные эффекты и сложная графика, у нас есть отдел 3D-анимации, motion design и VFX — делаем всё от рекламных джинглов до полноценных анимационных роликов.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ai">
            <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-foreground hover:no-underline">
              AI-решения для маркетинга — направление Martin Lab
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              <p>
                В 2024 году мы запустили Martin Lab — подразделение, которое специализируется на внедрении искусственного интеллекта в маркетинг и бизнес-процессы клиентов. Разрабатываем AI-ассистентов для клиентского сервиса, автоматизируем создание контента через генеративные нейросети, создаём AI-видео и настраиваем интеграции с CRM. Наши AI-решения уже работают в нескольких белорусских и российских компаниях, сокращая время на рутинные задачи в 3–5 раз.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why">
            <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-foreground hover:no-underline">
              Почему бизнес выбирает Martin Media
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                <strong className="text-foreground">Опыт и масштаб.</strong> 3000+ реализованных проектов, из которых больше 70% — повторные заказы от существующих клиентов. Это говорит о доверии и результате. В команде 14 специалистов: сценаристы, режиссёры, операторы, монтажёры, 3D-художники, SMM-менеджеры, таргетологи и AI-разработчики.
              </p>
              <p>
                <strong className="text-foreground">Собственная студия в Минске.</strong> Съёмочная площадка, свет, звук, оборудование — всё своё, поэтому мы контролируем качество и сроки на каждом этапе. Клиенты не ищут подрядчиков на каждую задачу отдельно — мы закрываем весь цикл.
              </p>
              <p>
                <strong className="text-foreground">Прозрачность и цифры.</strong> После каждого проекта предоставляем отчёт: охваты, досмотры, CTR, конверсии, CPL. Это помогает бизнесу понять реальную отдачу от инвестиций в видеомаркетинг и принимать решения на основе данных, а не впечатлений.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="pt-8 text-foreground leading-relaxed">
          Если вам нужен видеопродакшн в Минске под задачи бизнеса — от разовой съёмки до комплексной контент-стратегии с AI-компонентом —{" "}
          <a href="/brief" className="text-primary underline-offset-4 hover:underline">
            оставьте заявку на расчёт стоимости
          </a>
          {" "}или{" "}
          <a href="tel:+375293321356" className="text-primary underline-offset-4 hover:underline">
            позвоните в агентство
          </a>
          . Обсудим задачу и подберём решение, которое принесёт измеримый результат.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SeoTextSection;
