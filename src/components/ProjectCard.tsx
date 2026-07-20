'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const isGif = project.image?.endsWith('.gif') ?? false;
  const isVideo = project.image?.endsWith('.mp4') ?? false;
  const isMedia = isGif || isVideo; // se sirve como <img>/<video>, no next/image
  const isStaticCursor = project.cursorMode === 'static';

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      data-cursor-image={isStaticCursor ? undefined : project.cursorImage ?? ''}
      data-cursor-image-size={isStaticCursor ? undefined : project.cursorImageSize}
      onMouseEnter={() => {
        if (project.image && !isVideo) {
          const img = new window.Image();
          img.src = project.image;
        }
      }}
      className="group block"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--bg)]">
        {project.image ? (
          <>
            {/* Capa base: a color, siempre visible */}
            {isVideo ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : isGif ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.imageAlt[locale]}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.imageAlt[locale]}
                loading="lazy"
                sizes="(min-width: 768px) 25vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            {/* Capa de hover: gris debajo + azul en mix-blend-color encima, aisladas
                en su propio contexto de mezcla para que el azul siempre se calcule
                sobre la versión en escala de grises (no sobre la original a color) —
                así el resultado es consistente pieza a pieza. */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-editorial group-hover:opacity-100"
              style={{ isolation: 'isolate' }}
            >
              {isVideo ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              ) : isGif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              )}
              <div className="absolute inset-0 bg-[#3349CC] mix-blend-color" />
            </div>

            {/* Modo 'static': la imagen no sigue al cursor, aparece fija en la
                esquina de la tarjeta al hacer hover (el círculo del cursor
                normal se mantiene, sin sustituir). */}
            {isStaticCursor && project.cursorImage && (
              <div
                className="pointer-events-none absolute bottom-4 right-4 scale-90 opacity-0 transition-all duration-500 ease-editorial group-hover:scale-100 group-hover:opacity-100"
                style={{
                  width: project.cursorImageSize ?? 120,
                  height: project.cursorImageSize ?? 120,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- decorativo, tamaño fijo */}
                <img src={project.cursorImage} alt="" className="h-full w-full object-contain drop-shadow-lg" />
              </div>
            )}
          </>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-wide opacity-40">
            {project.title}
          </span>
        )}
      </div>
      <p className="mt-3 font-mono text-xs tracking-wide">
        {project.number} {project.title}
      </p>
    </Link>
  );
}
