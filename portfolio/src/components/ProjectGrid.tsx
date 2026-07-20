'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useReveal } from '@/lib/use-reveal';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data/projects';

const PAGE_SIZE = 8;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const ref = useReveal<HTMLElement>();

  const visible = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="work" ref={ref} className="reveal px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            data-cursor="view"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="font-mono text-xs tracking-wide underline underline-offset-4"
          >
            {t.grid.loadMore}
          </button>
        </div>
      )}
    </section>
  );
}
