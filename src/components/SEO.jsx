import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/content';

export default function SEO({ title, description, image, url, type = 'website' }) {
  const seoTitle = title || siteConfig.seo.title;
  const seoDescription = description || siteConfig.seo.description;
  const seoImage = image || siteConfig.seo.image;
  const seoUrl = url || siteConfig.seo.url;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <meta name="author" content={siteConfig.seo.author} />
      
      {/* OG Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.personal.name,
          url: siteConfig.seo.url,
          jobTitle: siteConfig.personal.title,
          sameAs: [
            siteConfig.socials.github,
            siteConfig.socials.linkedin,
          ],
        })}
      </script>
    </Helmet>
  );
}