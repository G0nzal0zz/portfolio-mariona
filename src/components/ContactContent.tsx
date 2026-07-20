'use client';

import { useLanguage } from '@/lib/language-context';
import { contactContent } from '@/data/contact-content';

export function ContactContent() {
  const { locale } = useLanguage();
  const c = contactContent[locale];

  return (
    <main className="px-6 pb-24 pt-28 md:px-10 md:pt-36">
      {/* Bio, tipografía grande — misma familia que el resto del sitio */}
      <div className="flex flex-col text-2xl leading-[1.1] md:text-[32px] [text-wrap:pretty]">
        {c.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Formación / Experiencia (izquierda) — Idiomas (derecha) */}
      <div className="mt-8 flex flex-col justify-between gap-10 font-mono text-base leading-none md:mt-10 md:flex-row md:text-lg">
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-bold">{c.formacionLabel}</p>
            <p className="mt-1 opacity-90">{c.formacion}</p>
          </div>
          <div>
            <p className="font-bold">{c.experienciaLabel}</p>
            <p className="mt-1 opacity-90">{c.experiencia}</p>
          </div>
        </div>

        <div className="md:text-right">
          <p className="font-bold">{c.idiomasLabel}</p>
          {c.idiomas.map((line) => (
            <p key={line} className="mt-1 opacity-90">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Foto, tratamiento monocromo azul (ya viene aplicado en el archivo) — recorte centrado en la cara */}
      <div className="relative mt-12 aspect-[10/9] w-[280px] overflow-hidden md:w-[340px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="images/contact/mariona.jpg"
          alt="Mariona Larroya"
          sizes="340px"
          style={{ objectPosition: '75% 20%' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
