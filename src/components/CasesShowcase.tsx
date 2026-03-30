import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import { ArrowRight, Play } from "lucide-react";

const featured = cases.slice(0, 3);

const CasesShowcase = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Кейсы</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-lg">
            Реальные проекты с измеримыми результатами
          </p>
        </div>
        <Link to="/kejsy" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0">
          Все кейсы <ArrowRight size={16} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/kejsy/${c.slug}`}
              className="group block rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Cover */}
              <div className="relative h-48 overflow-hidden">
                {c.coverImage ? (
                  <img
                    src={c.coverImage}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${c.coverGradient}`} />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Video indicator */}
                {(c.videoUrl || c.videoUrls) && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play size={14} className="text-primary-foreground ml-0.5" />
                  </div>
                )}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {c.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/80 text-foreground backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{c.client} · {c.industry}</p>
                <h3 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {c.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {c.results.slice(0, 2).map((r) => (
                    <span key={r} className="text-xs text-primary font-medium">{r}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CasesShowcase;
