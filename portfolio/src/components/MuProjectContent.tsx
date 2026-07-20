'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { muContent } from '@/data/mu-content';

// Misma estructura que Kraux / Fourth / Diwala: aside fixed 38%/max-w-xl,
// bloque de párrafos con altura fija y texto alineado abajo para que
// la barra de navegación caiga siempre en el mismo sitio.
export function MuProjectContent() {
  const { locale } = useLanguage();
  const c = muContent[locale];

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
          <span>*004 //</span>
          <Link href="/work/diwala" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.prev}
          </Link>
          <span>//</span>
          <Link href="/work/alhambra" data-cursor="view" className="hover:opacity-100 hover:underline underline-offset-4">
            {c.next}
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col gap-6 pb-24 md:gap-8">
        {/* 1. Vídeo animación logo */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1400 / 902 }}>
          <video
            src="/images/projects/mu/animacion-logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* 2. vaca con etiqueta + mockup botella en prado */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1643 / 2200 }}>
            <Image
              src="/images/projects/mu/cover.jpg"
              alt="Vaca con etiqueta de la marca Mú"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1643 / 2200 }}>
            <Image
              src="/images/projects/mu/mockup-botella-prado.jpg"
              alt="Mockup de la botella Mú en un prado"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Vacas con leche */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1228 }}>
          <Image
            src="/images/projects/mu/vacas-con-leche.jpg"
            alt="Vacas junto a botellas de leche Mú"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 4. Estanterías botellas + pack botellas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1465 / 2200 }}>
            <Image
              src="/images/projects/mu/estanterias-botellas.jpg"
              alt="Botellas de Mú en estanterías"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1465 / 2200 }}>
            <Image
              src="/images/projects/mu/pack-botellas.jpg"
              alt="Pack de botellas Mú"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 5. Frame 68 */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1235 }}>
          <Image
            src="/images/projects/mu/frame-68.jpg"
            alt="Detalle del proyecto Mú"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6. Gemini generate + logo en vaca */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1476 / 2200 }}>
            <Image
              src="/images/projects/mu/gemini-generate.jpg"
              alt="Composición generativa del proyecto Mú"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 1476 / 2200 }}>
            <Image
              src="/images/projects/mu/logo-en-vaca.jpg"
              alt="Logotipo Mú aplicado sobre una vaca"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 7. Botella en prado */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2200 / 1227 }}>
          <Image
            src="/images/projects/mu/botella-en-prado.jpg"
            alt="Botella Mú en un prado"
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
