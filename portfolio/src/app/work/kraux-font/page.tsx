import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KrauxProjectContent } from '@/components/KrauxProjectContent';

// Página interior específica de Kraux Font, construida a partir de tu referencia.
// Es una página propia (no la plantilla genérica de /work/[slug]), porque su
// composición es particular a este proyecto.
export default function KrauxFontPage() {
  return (
    <>
      <Header />
      <KrauxProjectContent />
      <Footer />
    </>
  );
}
