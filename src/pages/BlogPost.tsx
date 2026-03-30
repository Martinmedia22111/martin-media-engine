import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { blogArticles } from "@/data/blogArticles";
import { companyInfo } from "@/data/company";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const dateFormatted = new Date(article.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      url: `https://${companyInfo.website}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${companyInfo.website}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
        type="article"
        article={{ author: article.author, publishedTime: article.date }}
      />
      <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Блог", url: "/blog" }, { name: article.title.substring(0, 40), url: `/blog/${article.slug}` }]} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      <main className="pt-20">
        <article className="section-padding bg-background">
          <div className="container max-w-3xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Назад к блогу
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <User size={14} /> {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {dateFormatted}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>
            </motion.div>

            {/* Table of contents */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 p-5 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="text-sm font-semibold text-foreground mb-3">Содержание</p>
              <ol className="space-y-1.5">
                {article.sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </motion.nav>

            {/* Content */}
            {article.sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mb-10 scroll-mt-24"
              >
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {s.title}
                </h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.content.split("\n").map((line, li) => {
                    // Bold text
                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    const rendered = parts.map((part, pi) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={pi} className="text-foreground font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return part;
                    });

                    if (line.trim() === "") return <br key={li} />;

                    // Table rows
                    if (line.trim().startsWith("|")) {
                      if (line.trim().startsWith("|--") || line.trim().startsWith("| --")) return null;
                      const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                      const isHeader = i === 0 && article.sections[0]?.content.indexOf(line) !== -1 &&
                        line === article.sections.find(sec => sec.content.includes(line))?.content.split("\n").find(l => l.trim().startsWith("|"));
                      return (
                        <div key={li} className="grid grid-cols-3 gap-2 py-1.5 text-sm border-b border-border/50">
                          {cells.map((cell, ci) => (
                            <span key={ci} className={ci === 0 ? "font-medium text-foreground" : ""}>
                              {cell}
                            </span>
                          ))}
                        </div>
                      );
                    }

                    return <p key={li} className="mb-2">{rendered}</p>;
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
