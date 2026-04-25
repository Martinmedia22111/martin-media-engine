import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { submitForm } from "@/lib/formSubmit";

interface InlineContactFormProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

const InlineContactForm = ({
  title = "Обсудить проект",
  subtitle = "Оставьте контакты — мы свяжемся и предложим решение под ваши задачи",
  variant = "light",
}: InlineContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitForm({
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      source: "Инлайн-форма на главной",
    });

    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "section-padding bg-foreground"
          : "section-padding bg-[radial-gradient(ellipse_at_top,hsl(0_60%_18%)_0%,hsl(0_0%_4%)_70%)]"
      }
    >
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-heading font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`mt-3 text-lg ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mt-10 text-center p-10 rounded-2xl border ${isDark ? "border-primary-foreground/10 bg-primary-foreground/5" : "border-primary/20 bg-primary/[0.03]"}`}
          >
            <CheckCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
              Заявка отправлена!
            </h3>
            <p className={isDark ? "text-primary-foreground/70" : "text-muted-foreground"}>
              Мы свяжемся с вами в ближайшее время
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                  Имя *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                  Телефон *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+375 (__) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                Сообщение
              </label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Расскажите кратко о вашем проекте"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button type="submit" variant="default" size="lg" disabled={loading}>
                {loading ? <><Loader2 size={16} className="mr-1 animate-spin" /> Отправка...</> : <>Отправить заявку <Send size={16} className="ml-1" /></>}
              </Button>
              <p className={`text-xs ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default InlineContactForm;
