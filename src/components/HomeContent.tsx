'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { InfiniteScroll } from './InfiniteScroll';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

// 3 proyectos destacados — de momento los 3 primeros del listado.
// Dime si prefieres otros y cambio la selección.
const featured = projects.slice(0, 3);

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. Scroll infinito de imágenes en monocromo azul, a sangre (fuera del
          padding de <main>), con el isotipo superpuesto en blanco. */}
      <div className="pt-20">
        <InfiniteScroll />
      </div>

      <main className="px-6 pb-24 pt-12 md:px-10 md:pt-16">
        {/* 2. Texto de presentación */}
        <section className="mx-auto max-w-2xl text-center">
          <p className="text-xl leading-snug md:text-2xl [text-wrap:pretty]">
            {t.home.introLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.home.introLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>

        {/* 3. Proyectos destacados */}
        <section className="mt-20 md:mt-28">
          <div className="mb-8 flex items-baseline justify-between md:mb-10">
            <h2 className="font-mono text-xs tracking-wide opacity-70">{t.home.featuredHeading}</h2>
            <Link href="/work" data-cursor="view" className="font-mono text-xs tracking-wide opacity-70 hover:opacity-100">
              {t.home.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
