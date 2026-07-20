# mariona.larroya — portfolio web

Home de la web, primera fase (Next.js + TypeScript + Tailwind).

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Qué incluye esta fase (solo Home)

- Header con navegación, selector ES|EN y selector LIGHT|DARK
- Tema persistente entre visitas (cookie, resuelto en servidor — sin parpadeo al cargar)
- Idioma persistente (localStorage), detecta el idioma del navegador en la primera visita
- Cursor personalizado (círculo blanco → "VER →"/"VIEW →"), solo en dispositivos con ratón
- Logo animado como firma (se dibuja con `stroke-dasharray`), solo la primera vez que se entra en la web
- Hero con el proyecto destacado + grid de proyectos con paginación "+ ver más"
- Precarga de imagen a tamaño completo al hacer hover, para que la transición a la página de proyecto sea instantánea
- Footer con copia al portapapeles (email / teléfono) y notificación "Copiado"/"Copied"
- Smooth scroll con Lenis (se desactiva automáticamente con `prefers-reduced-motion`)
- Reveal de secciones al hacer scroll (fade + desplazamiento vertical sutil)

## Pendiente / a sustituir antes de publicar

1. **Tipografía Saans / Saans Mono.** De momento se usa una alternativa de sistema
   (ver `--font-display` y `--font-mono` en `src/app/globals.css`). Cuando tengas
   los `.woff2` licenciados: colócalos en `src/app/fonts/`, y en `src/app/layout.tsx`
   sustituye la nota por `next/font/local`, por ejemplo:
   ```ts
   import localFont from 'next/font/local';
   const displayFont = localFont({
     src: '../app/fonts/Saans-Regular.woff2',
     variable: '--font-display',
   });
   ```
2. **Imágenes reales de proyecto.** `src/data/projects.ts` referencia rutas en
   `/public/projects/*.jpg` que aún no existen (son placeholders con los nombres
   de los proyectos de tu Figma). Copia ahí tus archivos optimizados con esos
   mismos nombres, o cambia las rutas.
3. **Datos de contacto y redes.** En `src/components/Footer.tsx`: email, teléfono,
   enlaces de Instagram/LinkedIn/Behance y el PDF del portfolio (ahora mismo
   apunta a `/mariona-larroya-portfolio.pdf`, que también hay que añadir a `/public`).
4. **Página de proyecto.** `src/app/work/[slug]/page.tsx` es un stub temporal
   (solo para que los enlaces no den 404). La desarrollamos en la siguiente fase,
   con el layout de columna fija a la izquierda + scroll de imágenes a la derecha
   que confirmaste.

## Notas técnicas

- El tema por defecto es DARK (fondo azul `#0025FF`, texto blanco), igual que el Figma.
- El cursor personalizado se desactiva solo con `@media (hover: hover) and (pointer: fine)`,
  así que en touch/tablet el cursor del sistema funciona con normalidad.
- Cualquier elemento interactivo que deba activar el cursor "VER →" necesita el
  atributo `data-cursor="view"`.
