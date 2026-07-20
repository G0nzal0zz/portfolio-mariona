import type { Metadata } from 'next';
import './globals.css';
import { getServerTheme } from '@/lib/get-server-theme';
import { ThemeProvider } from '@/lib/theme-context';
import { LanguageProvider } from '@/lib/language-context';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';

// NOTA: --font-display y --font-mono usan de momento una alternativa del sistema
// (definida en globals.css). En cuanto tengas los .woff2 de Saans / Saans Mono,
// colócalos en src/app/fonts/ y sustituye este bloque por next/font/local — ver README.md.

export const metadata: Metadata = {
  title: 'Mariona Larroya — Diseño gráfico y branding',
  description:
    'Portfolio de Mariona Larroya, diseñadora gráfica especializada en identidad de marca, packaging y dirección de arte.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = getServerTheme();

  return (
    <html lang="es" data-theme={theme}>
      <body>
        {/* ThemeProvider vive aquí, en el layout raíz, que no se vuelve a montar
            al navegar entre páginas — así el tema no se desincroniza al cambiar
            de página justo después de alternarlo (el bug que reportaste). */}
        <ThemeProvider initialTheme={theme}>
          <LanguageProvider>
            <SmoothScroll>
              <CustomCursor />
              {children}
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
