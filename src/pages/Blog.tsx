import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => (
  <>
    <SEO
      title="Блог о видеомаркетинге и AI"
      description="Экспертные статьи Martin Media: видеопродакшн, TikTok, Reels, SMM-стратегии, AI-решения для бизнеса. Гайды, кейсы, разборы."
      path="/blog"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }]} />
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Блог</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">Экспертные материалы о видео, контенте и AI для бизнеса</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((a, i) => (
              <motion.div key={a.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${a.slug}`} className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 self-start">{a.category}</span>
                  <h2 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">{a.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-2"><Calendar size={12} />{a.date}</div>
                    <span>{a.readTime}</span>
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

export default Blog;