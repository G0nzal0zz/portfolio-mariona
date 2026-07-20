'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { fourthContent } from '@/data/fourth-content';

// Misma estructura de columnas que la página de Kraux (aside fixed al 38% /
// max-w-xl, texto compacto sin gap entre párrafos). Orden y proporciones de
// imagen tal como los indicaste.
export function FourthProjectContent() {
  const { locale } = useLanguage();
  const c = fourthContent[locale];

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
          <span>*002 //</span>
          <Link href="/work/kraux-font" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.prev}
          </Link>
          <span>//</span>
          <Link href="/work/diwala" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.next}
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col gap-6 pb-24 md:gap-8">
        {/* 1. Vídeo hero rosa, en loop */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1400 / 788 }}>
          <video
            src="/images/projects/fourth/hero-rosa.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* 2. bolso_bote + diástasis 03 — misma altura */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1250 / 1349 }}>
            <Image
              src="/images/projects/fourth/bolso-bote.jpg"
              alt="Bote de Fourth guardado en un bolso rosa"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1250 / 1349 }}>
            <Image
              src="/images/projects/fourth/diastasis-03.jpg"
              alt="Explicación de la diástasis abdominal y el símbolo de Fourth"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Textura de polvo con el logo grabado */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1228 }}>
          <Image
            src="/images/projects/fourth/powder-texture.jpg"
            alt="Textura de proteína en polvo con el logotipo Fourth grabado"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 4. Vídeo diástasis 2 (loop) + todo cajas — misma altura */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1000 / 1236 }}>
            <video
              src="/images/projects/fourth/diastasis-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1000 / 1236 }}>
            <Image
              src="/images/projects/fourth/todo-cajas.jpg"
              alt="Cajas de packaging de Fourth apiladas"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 5. Packaging desplegable */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1228 }}>
          <Image
            src="/images/projects/fourth/packaging-desplegable.jpg"
            alt="Troquel desplegado del packaging de Fourth"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6. mockup bote + mockup cara */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 671 / 1000 }}>
            <Image
              src="/images/projects/fourth/mockup-bote.jpg"
              alt="Mockup del bote de Fourth"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 671 / 1000 }}>
            <Image
              src="/images/projects/fourth/mockup-cara.jpg"
              alt="Mockup del packaging de Fourth sobre el cuerpo"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 7. poniendo proteína + vídeo cuerpos (loop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 671 / 1000 }}>
            <Image
              src="/images/projects/fourth/poniendo-proteina.jpg"
              alt="Preparando la proteína Fourth en un vaso"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 671 / 1000 }}>
            <video
              src="/images/projects/fourth/cuerpos.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
