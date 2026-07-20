import { Header } from '@/components/Header';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

// Página Projects: el grid muestra la lista completa de proyectos.
export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </>
  );
}
