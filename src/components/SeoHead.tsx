import { useEffect } from 'react';

const SEO = {
  siteName: 'LM Consultoria',
  title: 'LM Consultoria | Inteligência Psicossocial e Performance',
  description:
    'Implementação estratégica da NR-01 com diagnóstico psicossocial, matriz de riscos e plano de ação para reduzir afastamentos e proteger sua empresa.',
  locale: 'pt_BR',
  path: '/',
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let tag = document.querySelector<HTMLScriptElement>(`script[id="${id}"]`);
  if (!tag) {
    tag = document.createElement('script');
    tag.id = id;
    tag.type = 'application/ld+json';
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

export function SeoHead() {
  useEffect(() => {
    const configuredUrl = import.meta.env.VITE_SITE_URL as string | undefined;
    const origin = configuredUrl?.trim() || window.location.origin;
    const siteUrl = new URL(SEO.path, origin).toString();
    const imageUrl = new URL('/Gradient.svg', origin).toString();

    document.documentElement.lang = 'pt-BR';
    document.title = SEO.title;

    upsertMeta('name', 'description', SEO.description);
    upsertMeta('name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    upsertMeta('name', 'theme-color', '#00302A');

    upsertMeta('property', 'og:locale', SEO.locale);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SEO.siteName);
    upsertMeta('property', 'og:title', SEO.title);
    upsertMeta('property', 'og:description', SEO.description);
    upsertMeta('property', 'og:url', siteUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', 'LM Consultoria - Inteligência Psicossocial e Performance');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', SEO.title);
    upsertMeta('name', 'twitter:description', SEO.description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertLink('canonical', siteUrl);

    upsertJsonLd('seo-schema-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SEO.siteName,
      url: siteUrl,
      inLanguage: 'pt-BR',
    });

    upsertJsonLd('seo-schema-service', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SEO.siteName,
      url: siteUrl,
      description: SEO.description,
      areaServed: 'BR',
      serviceType: 'Consultoria em gestão de riscos psicossociais',
      knowsAbout: ['NR-01', 'NR-17', 'ISO 45003', 'COPSOQ', 'GRO/PGR'],
    });
  }, []);

  return null;
}
