import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import Breadcrumbs from "@/components/Breadcrumbs";

const SITE_URL = "https://mmedia.by";

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
};

// ItemList schema для hub-страницы блога + массив BlogPosting для каждой статьи
const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog/#blog`,
  name: "Блог Martin Media о видеомаркетинге, TikTok и AI",
  description: "Экспертные статьи Martin Media: видеопродакшн, TikTok, Reels, SMM, AI-решения для бизнеса.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Martin Media",
    "@id": `${SITE_URL}/#organization`,
  },
  blogPost: blogArticles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    url: `${SITE_URL}/blog/${a.slug}`,
    author: {
      "@type": "Person",
      name: a.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Martin Media",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${a.slug}`,
    },
  })),
};

const Blog = () => (
  <>
    <SEO
      title="Блог о видеомаркетинге, TikTok и AI"
      description="Экспертные статьи Martin Media: видеопродакшн, TikTok, Reels, SMM-стратегии, AI-решения, KPI и бюджеты видеомаркетинга. Гайды, кейсы, разборы от агентства с 3000+ проектами."
      path="/blog"
    />
    <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }]} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(blogListJsonLd)}</script>
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 max-w-3xl">
            <Breadcrumbs items={[{ name: "Главная", url: "/" }, { name: "Блог" }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Блог Martin Media о видеомаркетинге, TikTok и AI
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Разбираем тренды видеопродакшна, стратегии TikTok и Reels, AI-инструменты для маркетинга, KPI и бюджеты на видео для бизнеса. Всё, что делает короткое видео рабочим инструментом продаж, — на опыте 3000+ проектов Martin Media.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Всего статей: <span className="text-foreground font-medium">{blogArticles.length}</span> · Обновляется 2 раза в неделю
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
              >
                <Link
                  to={`/blog/${a.slug}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                >
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 self-start">
                    {a.category}
                  </span>
                  <h2 className="font-heading font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-3 text-lg">
                    {a.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                    </div>
                    <span>{a.readTime}</span>
                  </div>
                </Link>
              </motion.article>
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
