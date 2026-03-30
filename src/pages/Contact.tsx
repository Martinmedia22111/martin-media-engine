import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Рассчитать стоимость проекта</h1>
              <p className="mt-4 text-lg text-muted-foreground">Заполните форму — мы свяжемся с вами и предложим индивидуальное решение</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">📞 {companyInfo.phoneFormatted}</a>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors">✉️ {companyInfo.email}</a>
              </div>
            </motion.div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-12 text-center p-10 rounded-2xl border border-primary/20 bg-primary/[0.03]">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Заявка отправлена!</h2>
                <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Имя *</label>
                    <input required type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Компания</label>
                    <input type="text" placeholder="Название компании" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input required type="email" placeholder="email@company.com" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Телефон</label>
                    <input type="tel" placeholder="+375 (__) ___-__-__" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Расскажите подробнее о проекте *</label>
                  <textarea required rows={4} placeholder="Чем занимаетесь, какие площадки для продвижения хотели бы охватить?" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Какие услуги интересуют?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
                    <option value="">Выберите направление</option>
                    <option>TikTok под ключ</option>
                    <option>Видео для рекламы</option>
                    <option>Корпоративные видео</option>
                    <option>AI Video</option>
                    <option>Instagram под ключ</option>
                    <option>YouTube продвижение</option>
                    <option>VFX, 3D анимация, моушн</option>
                    <option>Аренда видеостудии</option>
                    <option>Съёмка с квадрокоптера</option>
                    <option>SMM и контент-стратегия</option>
                    <option>Другое</option>
                  </select>
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Отправить заявку <Send size={16} className="ml-1" />
                </Button>
                <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </motion.form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;