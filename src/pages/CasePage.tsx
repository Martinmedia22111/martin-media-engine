import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { CheckCircle, Quote } from "lucide-react";

const CasePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseItem = cases.find((c) => c.slug === slug);

  if (!caseItem) return <div className="min-h-screen flex items-center justify-center"><p>Кейс не найден</p></div>;

  const relatedServices = services.filter((s) => caseItem.services.includes(s.slug));
  const relatedCases = cases.filter((c) => c.id !== caseItem.id && c.tags.some((t) => caseItem.tags.includes(t))).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/kejsy" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Все кейсы</Link>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                {caseItem.tags.map((t) => <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{t}</span>)}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{caseItem.title}</h1>
              <p className="mt-2 text-muted-foreground">{caseItem.client} · {caseItem.industry}</p>
            </motion.div>
          </div>
        </section>

        {/* Cover */}
        <div className={`h-48 md:h-64 bg-gradient-to-br ${caseItem.coverGradient}`} />

        {/* Challenge */}
        <section className="section-padding bg-background">
          <div className="container max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Задача</h2>
              <p className="text-muted-foreground leading-relaxed">{caseItem.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Решение</h2>
              <p className="text-muted-foreground leading-relaxed">{caseItem.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Результаты</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseItem.results.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/[0.03]">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-primary">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {caseItem.quote && (
              <div className="p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border">
                <Quote size={24} className="text-primary/30 mb-3" />
                <p className="text-foreground leading-relaxed italic">{caseItem.quote.text}</p>
                <div className="mt-4">
                  <div className="font-heading font-semibold text-foreground text-sm">{caseItem.quote.author}</div>
                  <div className="text-xs text-muted-foreground">{caseItem.quote.role}</div>
                </div>
              </div>
            )}

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Связанные услуги</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((s) => (
                    <Link key={s.slug} to={`/uslugi/${s.slug}`} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-colors">{s.shortTitle}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <section className="section-padding-sm bg-secondary/50">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Похожие кейсы</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedCases.map((c) => (
                  <Link key={c.id} to={`/kejsy/${c.slug}`} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all">
                    <p className="text-xs text-muted-foreground mb-1">{c.client}</p>
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">{c.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection title="У вас похожая задача?" subtitle="Расскажите — предложим решение и оценку" />
      </main>
      <Footer />
    </>
  );
};

export default CasePage;