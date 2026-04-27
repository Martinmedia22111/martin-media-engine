import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "dark";
}

const CTASection = forwardRef<HTMLElement, CTASectionProps>(({
  title = "Готовы обсудить проект?",
  subtitle = "Расскажите о задаче — мы предложим решение и оценку за 24 часа",
  buttonText = "Обсудить проект",
  buttonLink = "/brief",
  variant = "default",
}, ref) => (
  <section ref={ref} className={variant === "dark" ? "section-padding gradient-hero" : "section-padding bg-primary/[0.04]"}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className={`text-3xl md:text-4xl font-bold ${variant === "dark" ? "text-background" : "text-foreground"}`}>
          {title}
        </h2>
        <p className={`mt-4 text-lg ${variant === "dark" ? "text-neutral-400" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
        <div className="mt-8">
          <Button asChild variant="hero" size="xl">
            <Link to={buttonLink}>
              {buttonText} <ArrowRight size={18} className="ml-1" />
            </Link>
          </Button>
        </div>
        <p className={`mt-4 text-sm ${variant === "dark" ? "text-neutral-500" : "text-muted-foreground"}`}>
          Бесплатная консультация · Ответ за 24 часа
        </p>
      </motion.div>
    </div>
  </section>
));

CTASection.displayName = "CTASection";

export default CTASection;