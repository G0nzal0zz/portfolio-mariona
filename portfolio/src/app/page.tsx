import { Header } from '@/components/Header';
import { HomeContent } from '@/components/HomeContent';
import { Footer } from '@/components/Footer';

// Home: pieza de introducción editorial, sin hero de proyecto ni grid.
// La página Projects (con el grid) vive en /work y no se toca desde aquí.
export default function HomePage() {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
}
