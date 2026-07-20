import 'server-only';
import { cookies } from 'next/headers';
import { THEME_COOKIE, type Theme } from './theme';

// IMPORTANTE: este módulo importa next/headers y solo puede usarse desde
// Server Components (layout.tsx, page.tsx...). Nunca lo importes desde un
// archivo con 'use client' — para eso está THEME_COOKIE / Theme en ./theme.ts.
// El paquete 'server-only' hace que el build falle de forma explícita si
// alguna vez se cuela por error en un bundle de cliente, en vez de fallar
// en runtime con un mensaje críptico.

// DARK es el tema por defecto (fondo azul, texto blanco), tal como en el diseño de Figma.
export function getServerTheme(): Theme {
  const stored = cookies().get(THEME_COOKIE)?.value;
  return stored === 'light' ? 'light' : 'dark';
}
