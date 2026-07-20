'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scrollImages } from '@/data/scroll-images';
import { LogoMark } from './LogoMark';

// Baraja Fisher-Yates
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function InfiniteScroll() {
  // Empieza con el orden original (igual en servidor y cliente, evita el aviso
  // de hidratación) y se baraja justo después de montar, solo en cliente.
  const [images, setImages] = useState(scrollImages);

  useEffect(() => {
    setImages(shuffle(scrollImages));
  }, []);

  const track = [...images, ...images]; // duplicado para el loop continuo

  return (
    <section className="relative h-[75vh] min-h-[480px] w-full overflow-hidden">
      <div className="scroll-track flex h-full w-max items-center">
        {track.map((src, i) => (
          <div key={i} className="relative h-full aspect-square shrink-0 overflow-hidden">
            <Image src={src} alt="" fill sizes="75vh" className="object-cover grayscale" />
          </div>
        ))}
      </div>

      {/* Tinte azul permanente sobre todo el scroll */}
      <div className="pointer-events-none absolute inset-0 bg-[#3349CC] mix-blend-color" />

      {/* Isotipo superpuesto, blanco, grande */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <LogoMark sizePx={220} className="text-white" />
      </div>

      <style jsx>{`
        .scroll-track {
          animation: scroll-left 34s linear infinite;
        }
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
