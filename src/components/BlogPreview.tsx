import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  { slug: "skolko-stoit-reklamnyj-rolik", title: "Сколько стоит рекламный ролик в 2025 году: разбор форматов и подходов", category: "Гайды", date: "15 марта 2026", readTime: "8 мин" },
  { slug: "tiktok-vs-reels-vs-shorts", title: "TikTok, Reels или Shorts: что выбрать бизнесу и почему", category: "Сравнения", date: "10 марта 2026", readTime: "6 мин" },
  { slug: "kak-postroit-content-zavod", title: "Как построить контент-завод: пошаговая методология", category: "Кейсы и разборы", date: "5 марта 2026", readTime: "12 мин" },
];

const BlogPreview = () => (
  <section className="section-padding bg-paper-noise relative overflow-hidden">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent">Блог</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-lg">
            Экспертные материалы о видео, контенте и AI для бизнеса
          </p>
        </div>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0">
          Все статьи <ArrowRight size={16} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/blog/${a.slug}`}
              className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
            >
              <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                {a.category}
              </span>
              <h3 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-4">
                {a.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                <Calendar size={12} />
                <span>{a.date}</span>
                <span>·</span>
                <span>{a.readTime}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;