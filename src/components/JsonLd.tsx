import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mmedia.by";

/* ── Organization (used on every page via layout) ── */
export const OrganizationJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Martin Media",
      alternateName: "Мартин Медиа",
      url: SITE_URL,
      logo: "https://mmedia.by/wp-content/uploads/2024/07/logo.png",
      description: "Агентство видеомаркетинга полного цикла в Минске. Видеопродакшн, TikTok, Reels, SMM, AI-видео и продвижение для бизнеса с 2015 года.",
      foundingDate: "2015",
      email: "martinmedia.minsk@gmail.com",
      telephone: "+375293321356",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Минск",
        addressCountry: "BY",
      },
      areaServed: [
        { "@type": "Country", name: "Беларусь" },
        { "@type": "Country", name: "Россия" },
      ],
      sameAs: [],
      knowsAbout: [
        "Видеопродакшн", "TikTok-маркетинг", "Instagram Reels", "YouTube Shorts",
        "SMM", "Контент-стратегия", "AI-видео", "3D-анимация", "Motion Design",
        "VFX", "Аэросъёмка", "Корпоративные фильмы", "Рекламные ролики",
        "Influence-маркетинг", "PR-стратегии", "HR-бренд",
      ],
    })}</script>
  </Helmet>
);

/* ── LocalBusiness (for contact/about page) ── */
export const LocalBusinessJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Martin Media",
      image: "https://mmedia.by/wp-content/uploads/2024/07/logo.png",
      url: SITE_URL,
      telephone: "+375293321356",
      email: "martinmedia.minsk@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Минск",
        addressCountry: "BY",
      },
      priceRange: "$$",
      description: "Агентство видеомаркетинга полного цикла. Видеопродакшн, SMM, AI-решения для бизнеса.",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 14 },
      foundingDate: "2015",
    })}</script>
  </Helmet>
);

/* ── Service (for service pages) ── */
interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
}

export const ServiceJsonLd = ({ name, description, slug }: ServiceJsonLdProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url: `${SITE_URL}/uslugi/${slug}`,
      provider: {
        "@type": "Organization",
        name: "Martin Media",
        url: SITE_URL,
      },
      areaServed: { "@type": "Country", name: "Беларусь" },
    })}</script>
  </Helmet>
);

/* ── FAQPage ── */
interface FAQJsonLdProps {
  items: { question: string; answer: string }[];
}

export const FAQJsonLd = ({ items }: FAQJsonLdProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    })}</script>
  </Helmet>
);

/* ── BreadcrumbList ── */
interface BreadcrumbProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbJsonLd = ({ items }: BreadcrumbProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    })}</script>
  </Helmet>
);

/* ── WebSite (for homepage) ── */
export const WebSiteJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Martin Media",
      url: SITE_URL,
      description: "Агентство видеомаркетинга полного цикла в Минске. Видеопродакшн, TikTok, SMM, AI-видео.",
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      inLanguage: "ru",
    })}</script>
  </Helmet>
);
