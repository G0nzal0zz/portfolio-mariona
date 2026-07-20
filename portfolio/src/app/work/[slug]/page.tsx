import Link from 'next/link';
import { projects } from '@/data/projects';

// Página de proyecto: pendiente de desarrollo (siguiente fase, tras cerrar la Home).
// Este stub evita un 404 mientras tanto y confirma que el slug existe.
export function generateStaticParams() {
  // kraux-font, fourth, diwala y mu tienen ahora su propia página dedicada.
  return projects
    .filter((p) => !['kraux-font', 'fourth', 'diwala', 'mu'].includes(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs tracking-wide opacity-60">
        {project ? project.number : '—'} · próximamente
      </p>
      <h1 className="text-2xl">{project ? project.title : 'Proyecto'}</h1>
      <Link href="/work" className="font-mono text-xs tracking-wide underline underline-offset-4" data-cursor="view">
        ← volver
      </Link>
    </main>
  );
}
