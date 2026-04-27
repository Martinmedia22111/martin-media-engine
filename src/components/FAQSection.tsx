import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  showH1?: boolean;
}

const defaultFAQ: FAQItem[] = [
  { question: "Сколько стоят ваши услуги?", answer: "Стоимость зависит от задачи, формата и объёма. Мы всегда подбираем решение под бюджет клиента. Оставьте заявку — подготовим индивидуальное предложение." },
  { question: "Как быстро вы начинаете работу?", answer: "Обычно стартуем в течение 3–5 рабочих дней после согласования брифа. Срочные проекты обсуждаются индивидуально." },
  { question: "Работаете ли вы с компаниями из других стран?", answer: "Да, работаем по всей Беларуси и за рубежом. Многие процессы ведём удалённо, при необходимости выезжаем на съёмки." },
  { question: "Что нужно от нас для старта?", answer: "Заполненный бриф, понимание цели и контактное лицо для коммуникации. Мы проведём установочную встречу и разберёмся во всех деталях." },
  { question: "Можно ли заказать только одну услугу?", answer: "Да, можно. Но мы рекомендуем комплексный подход: стратегия + продакшн + дистрибуция дают кратно больший результат." },
  { question: "Как вы измеряете результат?", answer: "Мы согласовываем KPI на старте и предоставляем регулярные отчёты. Метрики зависят от задачи: охваты, конверсии, стоимость лида, вовлечённость и др." },
];

/**
 * FAQ использует нативный <details>/<summary>, чтобы ВСЕ ОТВЕТЫ всегда
 * были в DOM, видны поисковикам, AI-ботам и screen readers.
 * По умолчанию первый вопрос открыт — даёт сразу видимый контент в пререндере.
 */
const FAQSection = forwardRef<HTMLElement, FAQSectionProps>(({ items = defaultFAQ, title = "Частые вопросы", subtitle, showH1 = false }, ref) => {
  const Heading = showH1 ? "h1" : "h2";
  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Heading className="text-3xl md:text-4xl font-bold text-foreground">{title}</Heading>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="group border border-border rounded-xl px-5 open:border-primary/30 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-heading font-semibold text-foreground text-sm md:text-base hover:text-primary py-4">
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="text-muted-foreground text-sm leading-relaxed pb-4 pr-6">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
