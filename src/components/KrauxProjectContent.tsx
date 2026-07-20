'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { krauxContent } from '@/data/kraux-content';

// Orden y proporciones tal como los indicaste:
// 1. hero.gif (animado, a todo ancho)
// 2. animacion-letras.gif + crowd-sold-out.jpg (fila de dos)
// 3. zoom-typographic.jpg sobre fondo negro (todo ancho)
// 4. web-poster.jpg + motion-mockups.gif (fila de dos)
// 5. alphabet-specimen.jpg (todo ancho)
// 6. hero-ambiente.jpg (florida-135) + poster-buenri.gif (fila de dos)
// 7. street-posters.jpg (todo ancho)
// Cada imagen conserva su proporción real (no se fuerza un recorte uniforme
// por fila), tal como el resto de la página: unas ocupan una columna, otras
// dos, y las proporciones varían de una a otra.

function GifBlock({ src, alt, ratio }: { src: string; alt: string; ratio: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- gif animado, next/image lo congelaría
    <img src={src} alt={alt} className="w-full" style={{ aspectRatio: ratio, objectFit: 'cover' }} loading="lazy" />
  );
}

export function KrauxProjectContent() {
  const { locale } = useLanguage();
  const c = krauxContent[locale];

  return (
    <main className="flex flex-col gap-10 px-6 pt-28 xl:flex-row xl:gap-4 md:px-10 xl:pt-32">
      {/* Espaciador: reserva el hueco del aside, que pasa a estar fixed. Ancho fijo
          siempre (no depende del idioma), para que la columna de imágenes nunca
          se desplace al cambiar entre ES/EN. */}
      <div className="hidden xl:block xl:w-[34vw] xl:max-w-xl xl:shrink-0" aria-hidden="true" />

      {/* Columna izquierda: fija de verdad (fixed), no se mueve nada al hacer scroll.
          Mismo ancho exterior siempre; el idioma solo afecta al ancho del texto por dentro. */}
      <aside className="xl:fixed xl:left-10 xl:top-20 xl:z-20 xl:w-[34vw] xl:max-w-xl">
        <Link href="/work" data-cursor="view" className="font-mono text-xs tracking-wide opacity-70 hover:opacity-100 hover:underline underline-offset-4">
          {c.back}
        </Link>

        <h1 className="mt-3 text-3xl md:text-4xl">{c.title}</h1>
        <p className="mt-1 font-mono text-xs tracking-wide opacity-70">{c.category}</p>

        <div className="mt-6 flex flex-col text-[15px] leading-[1.15] opacity-90 [text-wrap:pretty] xl:h-[420px] xl:justify-end">
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Link
          href="/work/fourth"
          data-cursor="view"
          className="mt-6 block font-mono text-xs tracking-wide opacity-70 hover:opacity-100 hover:underline underline-offset-4"
        >
          *001 // {c.next}
        </Link>
      </aside>

      {/* Columna derecha: secuencia de imágenes */}
      <div className="flex flex-1 flex-col gap-6 pb-24 md:gap-8">
        {/* 1. Hero animado */}
        <GifBlock src="/images/projects/kraux-font/hero.gif" alt="Título Kraux Font animado sobre ambiente de club" ratio={632 / 356} />

        {/* 2. animación de letras + sold out — misma altura, recortadas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1076 / 1286 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- gif animado */}
            <img
              src="/images/projects/kraux-font/animacion-letras.gif"
              alt="Animación de letras de la tipografía Kraux"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1076 / 1286 }}>
            <Image
              src="/images/projects/kraux-font/crowd-sold-out.jpg"
              alt="Sesión sold out con la estética Florida 135"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Bloque tipográfico (zoom), fondo negro */}
        <div className="w-full bg-black p-4 md:p-6">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1238 }}>
            <Image
              src="/images/projects/kraux-font/zoom-typographic.jpg"
              alt="Detalle tipográfico ampliado de la letra K de Kraux"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* 4. Poster web + motion mockups — misma altura */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1092 / 1648 }}>
            <Image
              src="/images/projects/kraux-font/web-poster.jpg"
              alt="Cartel KRAUX en amarillo y rosa con el sistema tipográfico completo"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1092 / 1648 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- gif animado */}
            <img
              src="/images/projects/kraux-font/motion-mockups.gif"
              alt="Mockups en movimiento de la tipografía Kraux"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5. Specimen del alfabeto */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1117 / 985 }}>
          <Image
            src="/images/projects/kraux-font/alphabet-specimen.jpg"
            alt="Specimen del alfabeto completo de Kraux Font"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6. Florida 135 + reducción cartel Buenri — misma altura, recortadas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 360 / 532 }}>
            <Image
              src="/images/projects/kraux-font/hero-ambiente.jpg"
              alt="Ambiente del club Florida 135"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 360 / 532 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- gif animado */}
            <img
              src="/images/projects/kraux-font/poster-buenri.gif"
              alt="Animación de reducción del cartel Buenri"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 7. Mockup de tres carteles en la calle */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1467 }}>
          <Image
            src="/images/projects/kraux-font/street-posters.jpg"
            alt="Mockup de tres carteles de Kraux Font en la calle"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
