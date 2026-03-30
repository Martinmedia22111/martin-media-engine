import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import { useState } from "react";
import { Play } from "lucide-react";

const allTags = Array.from(new Set(cases.flatMap((c) => c.tags)));

const Cases = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? cases.filter((c) => c.tags.includes(activeTag)) : cases;

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Кейсы</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg">Реальные проекты с измеримыми результатами для бизнеса</p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              <button onClick={() => setActiveTag(null)} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${!activeTag ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>Все</button>
              {allTags.map((tag) => (
                <button key={tag} onClick={() => setActiveTag(tag)} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${activeTag === tag ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{tag}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c, i) => (
                <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={`/kejsy/${c.slug}`} className="group block rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                    <div className="relative h-44 overflow-hidden">
                      {c.coverImage ? (
                        <img src={c.coverImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${c.coverGradient}`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {(c.videoUrl || c.videoUrls) && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play size={14} className="text-primary-foreground ml-0.5" />
                        </div>
                      )}
                      <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                        {c.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/80 text-foreground backdrop-blur-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground mb-2">{c.client} · {c.industry}</p>
                      <h3 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">{c.title}</h3>
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
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Cases;
