import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BreadcrumbJsonLd, VideoJsonLd } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { CheckCircle, Quote, Play } from "lucide-react";

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?]+)/);
  return match ? match[1] : null;
};

const YouTubeEmbed = ({ url, title }: { url: string; title?: string }) => {
  const videoId = getYouTubeId(url);
  if (!videoId) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      {title && <p className="px-4 py-2 text-sm font-medium text-foreground bg-card border-b border-border">{title}</p>}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const getTikTokVideoId = (url: string) => {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : null;
};

const TikTokEmbed = ({ url }: { url: string }) => {
  const videoId = getTikTokVideoId(url);
  const username = url.match(/@([^/]+)/)?.[1] || "tiktok";

  if (!videoId) {
    // If it's a profile link (no video ID), show a styled link to the profile
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center shrink-0">
          <span className="text-background font-bold text-sm">TT</span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Смотреть профиль на TikTok</p>
          <p className="text-xs text-muted-foreground">@{username}</p>
        </div>
      </a>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card">
      <div className="relative w-full flex justify-center" style={{ maxWidth: "360px", margin: "0 auto" }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          style={{ width: "100%", height: "740px", border: "none" }}
          allowFullScreen
          allow="encrypted-media"
          title={`TikTok @${username}`}
        />
      </div>
    </div>
  );
};

const CasePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseItem = cases.find((c) => c.slug === slug);

  if (!caseItem) return <div className="min-h-screen flex items-center justify-center"><p>Кейс не найден</p></div>;

  const relatedServices = services.filter((s) => caseItem.services.includes(s.slug));
  const relatedCases = cases.filter((c) => c.id !== caseItem.id && c.tags.some((t) => caseItem.tags.includes(t))).slice(0, 3);

  const hasVideo = caseItem.videoUrl || (caseItem.videoUrls && caseItem.videoUrls.length > 0) || (caseItem.localVideos && caseItem.localVideos.length > 0);

  return (
    <>
      <SEO
        title={`${caseItem.title} — кейс ${caseItem.client}`}
        description={caseItem.challenge.substring(0, 160)}
        path={`/kejsy/${caseItem.slug}`}
        ogImage={caseItem.coverImage}
      />
      <BreadcrumbJsonLd items={[{ name: "Главная", url: "/" }, { name: "Кейсы", url: "/kejsy" }, { name: caseItem.client, url: `/kejsy/${caseItem.slug}` }]} />
      {caseItem.videoUrl && <VideoJsonLd name={caseItem.title} description={caseItem.challenge} embedUrl={caseItem.videoUrl} thumbnailUrl={caseItem.coverImage} />}
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

        {/* Cover Image or Gradient */}
        {caseItem.coverImage ? (
          <div className={`h-64 md:h-96 overflow-hidden ${caseItem.coverType === "logo" ? `bg-gradient-to-br ${caseItem.coverGradient} flex items-center justify-center` : ""}`}>
            <img
              src={caseItem.coverImage}
              alt={caseItem.title}
              className={`${caseItem.coverType === "logo" ? "max-h-full max-w-md object-contain p-8" : "w-full h-full object-cover"}`}
            />
          </div>
        ) : (
          <div className={`h-48 md:h-64 bg-gradient-to-br ${caseItem.coverGradient}`} />
        )}

        {/* Content */}
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

            {/* Metrics */}
            {caseItem.metrics && caseItem.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseItem.metrics.map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-card border border-border">
                    <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Video Section */}
            {caseItem.videoUrl && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Play size={20} className="text-primary" /> Видео
                </h2>
                <YouTubeEmbed url={caseItem.videoUrl} />
              </div>
            )}

            {/* Multiple Videos */}
            {caseItem.videoUrls && caseItem.videoUrls.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Play size={20} className="text-primary" /> Видео проекта
                </h2>
                <div className="space-y-6">
                  {caseItem.videoUrls.map((v, i) => (
                    <YouTubeEmbed key={i} url={v.url} title={v.title} />
                  ))}
                </div>
              </div>
            )}

            {/* Local Videos */}
            {caseItem.localVideos && caseItem.localVideos.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Play size={20} className="text-primary" /> Видео проекта
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseItem.localVideos.map((v, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
                      {v.title && <p className="px-4 py-2 text-sm font-medium text-foreground border-b border-border">{v.title}</p>}
                      <video
                        src={v.url}
                        controls
                        playsInline
                        className="w-full"
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TikTok Embeds */}
            {caseItem.tiktokUrls && caseItem.tiktokUrls.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Play size={20} className="text-primary" /> TikTok
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseItem.tiktokUrls.map((url, i) => (
                    <TikTokEmbed key={i} url={url} />
                  ))}
                </div>
              </div>
            )}

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
                  <Link key={c.id} to={`/kejsy/${c.slug}`} className="group block rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all">
                    {c.coverImage && (
                      <div className={`h-32 overflow-hidden ${c.coverType === "logo" ? `bg-gradient-to-br ${c.coverGradient} flex items-center justify-center` : ""}`}>
                        <img src={c.coverImage} alt={c.title} className={`group-hover:scale-105 transition-transform duration-300 ${c.coverType === "logo" ? "max-h-full object-contain p-3" : "w-full h-full object-cover"}`} />
                      </div>
                    )}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">{c.client}</p>
                      <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">{c.title}</h3>
                    </div>
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
