'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { useLanguage } from '@/lib/language-context';
import { diwalaContent } from '@/data/diwala-content';

// Misma estructura de columnas que Kraux y Fourth (aside fixed 38% / max-w-xl).
export function DiwalaProjectContent() {
  const { locale } = useLanguage();
  const c = diwalaContent[locale];

  return (
    <main className="flex flex-col gap-10 px-6 pt-28 xl:flex-row xl:gap-4 md:px-10 xl:pt-32">
      <div className="hidden xl:block xl:w-[34vw] xl:max-w-xl xl:shrink-0" aria-hidden="true" />

      <aside className="xl:fixed xl:left-10 xl:top-20 xl:z-20 xl:w-[34vw] xl:max-w-xl">
        <Link
          href="/work"
          data-cursor="view"
          className="font-mono text-xs tracking-wide opacity-70 hover:opacity-100 hover:underline underline-offset-4"
        >
          {c.back}
        </Link>

        <h1 className="mt-3 text-3xl md:text-4xl">{c.title}</h1>
        <p className="mt-1 font-mono text-xs tracking-wide opacity-70">{c.category}</p>

        <div className="mt-6 flex flex-col text-[15px] leading-[1.15] opacity-90 [text-wrap:pretty] xl:h-[420px] xl:justify-end">
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-2 font-mono text-xs tracking-wide opacity-70">
          <span>*003 //</span>
          <Link href="/work/fourth" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.prev}
          </Link>
          <span>//</span>
          <Link href="/work/mu" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.next}
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col gap-6 pb-24 md:gap-8">
        {/* 1. Vídeo logo Diwala */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1400 / 788 }}>
          <video
            src={assetPath('/images/projects/diwala/diwala-logo.mp4')}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* 2. mockup vela + mockup cálido */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1476 / 2200 }}>
            <Image
              src="/images/projects/diwala/mockup-diwala-vela.jpg"
              alt="Mockup de la vela Diwala"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1476 / 2200 }}>
            <Image
              src="/images/projects/diwala/cover.jpg"
              alt="Mockup cálido del packaging de Diwala"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Diwala libro */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1227 }}>
          <Image
            src="/images/projects/diwala/libro.jpg"
            alt="Libro de marca de Diwala"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 4. Velas + vídeo telas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 800 / 1140 }}>
            <Image
              src="/images/projects/diwala/velas.jpg"
              alt="Velas aromáticas Diwala"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 800 / 1140 }}>
            <video
              src={assetPath('/images/projects/diwala/diwala-telas.mp4')}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* 5. Vídeo Mariona Larroya */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1400 / 780 }}>
          <video
            src={assetPath('/images/projects/diwala/mariona-larroya.mp4')}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* 6. Foto 8a17b + frame 29 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1080 / 1350 }}>
            <Image
              src="/images/projects/diwala/photo-8a17b.jpg"
              alt="Detalle del proyecto Diwala"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1080 / 1350 }}>
            <Image
              src="/images/projects/diwala/frame-29.jpg"
              alt="Detalle del proyecto Diwala"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
