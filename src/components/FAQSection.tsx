import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFAQ: FAQItem[] = [
  { question: "Сколько стоят ваши услуги?", answer: "Стоимость зависит от задачи, формата и объёма. Минимальный проект по видеопродакшну — от 150 000 ₽, short-form пакет — от 80 000 ₽/мес, AI-решения — от 200 000 ₽. Мы всегда подбираем решение под бюджет." },
  { question: "Как быстро вы начинаете работу?", answer: "Обычно стартуем в течение 3–5 рабочих дней после согласования брифа. Срочные проекты обсуждаются индивидуально." },
  { question: "Работаете ли вы с компаниями из регионов?", answer: "Да, мы работаем по всей России и за рубежом. Многие процессы ведём удалённо, при необходимости выезжаем на съёмки." },
  { question: "Что нужно от нас для старта?", answer: "Заполненный бриф, понимание цели и контактное лицо для коммуникации. Мы проведём установочную встречу и разберёмся во всех деталях." },
  { question: "Можно ли заказать только одну услугу?", answer: "Да, можно. Но мы рекомендуем комплексный подход: стратегия + продакшн + дистрибуция дают кратно больший результат." },
  { question: "Как вы измеряете результат?", answer: "Мы согласовываем KPI на старте и предоставляем регулярные отчёты. Метрики зависят от задачи: охваты, конверсии, стоимость лида, вовлечённость и др." },
];

const FAQSection = ({ items = defaultFAQ, title = "Частые вопросы", subtitle }: FAQSectionProps) => (
  <section className="section-padding bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-sm md:text-base hover:text-primary py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;