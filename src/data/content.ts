export type Locale = 'es' | 'en';

export const content = {
  es: {
    nav: { home: 'Home', work: 'Proyectos', contact: 'Contacto' },
    hero: { eyebrowPrefix: '*' },
    grid: { loadMore: '+ ver más' },
    home: {
      introLines: ['Identidades visuales construidas desde los sistemas,', 'la tipografía y la dirección de arte.'],
      featuredHeading: 'Proyectos destacados',
      viewAll: 'Ver todos →',
    },
    footer: {
      copied: 'Copiado',
      pdf: 'portfolio PDF:',
      pdfDownload: 'Descargar',
      social: 'Social',
      contact: 'Contacto',
    },
    theme: { light: 'LIGHT', dark: 'DARK' },
    lang: { es: 'ES', en: 'EN' },
  },
  en: {
    nav: { home: 'Home', work: 'Projects', contact: 'Contact' },
    hero: { eyebrowPrefix: '*' },
    grid: { loadMore: '+ load more' },
    home: {
      introLines: ['Visual identities built through systems,', 'typography and direction.'],
      featuredHeading: 'Selected work',
      viewAll: 'View all →',
    },
    footer: {
      copied: 'Copied',
      pdf: 'portfolio PDF:',
      pdfDownload: 'Download',
      social: 'Social',
      contact: 'Contact',
    },
    theme: { light: 'LIGHT', dark: 'DARK' },
    lang: { es: 'ES', en: 'EN' },
  },
} as const;

export type ContentShape = typeof content.es;
