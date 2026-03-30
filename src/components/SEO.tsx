import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mmedia.by";
const SITE_NAME = "Martin Media";
const DEFAULT_OG_IMAGE = "https://mmedia.by/wp-content/uploads/2024/07/logo.png";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  article?: {
    author?: string;
    publishedTime?: string;
  };
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  article,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = path === "/" ? title : `${title} — ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="ru_BY" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Article-specific */}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.author && <meta property="article:author" content={article.author} />}
    </Helmet>
  );
};

export default SEO;
