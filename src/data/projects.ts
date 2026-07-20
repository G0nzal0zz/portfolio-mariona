export type Project = {
  slug: string;
  number: string; // *001, *002...
  title: string;
  category: { es: string; en: string };
  image: string | null; // ruta en /publicimages/projects/<slug>/, o null si aún no hay foto
  imageAlt: { es: string; en: string };
  cursorImage?: string; // PNG con transparencia real, sustituye el círculo del cursor en hover
  cursorImageSize?: number; // px, por defecto 120 si no se indica
  cursorMode?: 'follow' | 'static'; // 'follow' (por defecto): sigue al ratón. 'static': fija en la esquina de la tarjeta, no se mueve.
};

// Estructura de imágenes: /publicimages/projects/<slug>/cover.jpg (+ otras para la página interior).
// Los números (*001...) deben mantenerse consecutivos: son referencia, no orden cronológico forzado.
export const projects: Project[] = [
  {
    slug: 'kraux-font',
    number: '*001',
    title: 'kraux font',
    category: { es: 'Tipografía · Techno/Rave', en: 'Typeface · Techno/Rave' },
    image: 'images/projects/kraux-font/mockup-fatima-cover.jpg',
    imageAlt: { es: 'Cartel Fatima Hajji tipografiado con Kraux Font', en: 'Fatima Hajji poster set in Kraux Font' },
    cursorImage: 'images/cursors/kraux.png',
    cursorImageSize: 150,
  },
  {
    slug: 'fourth',
    number: '*002',
    title: 'fourth',
    category: { es: 'Identidad de marca', en: 'Brand identity' },
    image: 'images/projects/fourth/hero-rosa.mp4', // vídeo en loop del logo, no gif ni imagen fija
    imageAlt: { es: 'Vídeo del logotipo Fourth en bucle', en: 'Fourth logo video, looping' },
    cursorImage: 'images/cursors/fourth.png',
    cursorImageSize: 210,
  },
  {
    slug: 'diwala',
    number: '*003',
    title: 'diwala',
    category: { es: 'Packaging · Velas', en: 'Packaging · Candles' },
    image: 'images/projects/diwala/cover.jpg',
    imageAlt: { es: 'Packaging cálido de la marca Diwala', en: 'Warm packaging shot, Diwala brand' },
    cursorImage: 'images/cursors/diwala.png',
    cursorImageSize: 270,
  },
  {
    slug: 'mu',
    number: '*004',
    title: 'mú',
    category: { es: 'Identidad de marca', en: 'Brand identity' },
    image: 'images/projects/mu/pack-botellas.jpg',
    imageAlt: { es: 'Pack de botellas de la marca Mú', en: 'Mú brand bottle pack' },
    cursorImage: 'images/cursors/mu.png',
    cursorImageSize: 150,
  },
  {
    slug: 'alhambra',
    number: '*005',
    title: 'alhambra',
    category: { es: 'Identidad visual', en: 'Visual identity' },
    image: 'images/projects/alhambra/cover.jpg',
    imageAlt: { es: 'Azulejo con patrón geométrico de la Alhambra', en: 'Geometric tile pattern, Alhambra' },
  },
  {
    slug: 'neox',
    number: '*006',
    title: 'neox',
    category: { es: 'Identidad de marca', en: 'Brand identity' },
    image: 'images/projects/neox/logos-sheet.jpg',
    imageAlt: { es: 'Hoja de logotipos de Neox', en: 'Neox logo sheet' },
  },
  {
    slug: 'serie-de-postales',
    number: '*007',
    title: 'serie de postales',
    category: { es: 'Ilustración editorial', en: 'Editorial illustration' },
    image: 'images/projects/postales/cover.jpg',
    imageAlt: { es: 'Postal escrita a mano sobre una mesa de azulejos', en: 'Handwritten postcard on a tiled table' },
  },
  {
    slug: 'apark',
    number: '*008',
    title: 'apark',
    category: { es: 'Por anunciar', en: 'To be announced' },
    image: 'images/projects/apark/cover.jpg',
    imageAlt: { es: 'Interfaz de la app Apark', en: 'Apark app interface' },
  },
];
