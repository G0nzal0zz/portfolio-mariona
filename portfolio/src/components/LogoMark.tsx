'use client';

import { useEffect, useState } from 'react';

const SEEN_KEY = 'ml_logo_seen';

/**
 * El logotipo (la M dibujada a mano, vectorizada) se reproduce como un trazo
 * que se dibuja progresivamente, como una firma — no un fundido genérico.
 * Usa pathLength=1 en cada trazo para no depender de la longitud real del path.
 * Se anima solo la primera vez que la persona entra en la web.
 */
export function LogoMark({
  className,
  sizePx = 40,
  responsive = false,
}: {
  className?: string;
  sizePx?: number;
  /** Si es true, el SVG ocupa el 100% de su contenedor (controla el tamaño con CSS desde fuera) en vez de un tamaño fijo en píxeles. */
  responsive?: boolean;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem(SEEN_KEY);
    if (!seen) {
      setShouldAnimate(true);
      window.localStorage.setItem(SEEN_KEY, '1');
    }
  }, []);

  return (
    <svg
      viewBox="0 0 389.4 259.1"
      width={responsive ? '100%' : sizePx}
      height={responsive ? undefined : (sizePx * 259.1) / 389.4}
      className={className}
      role="img"
      aria-label="Mariona Larroya — sello"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={12}
        strokeMiterlimit={10}
        className={shouldAnimate ? 'logo-draw' : undefined}
      >
        <path
          pathLength={1}
          d="M171.7,164.3c9.5-28.5,17.1-47.7,23.2-61.4,1.6-3.5,4.1-9,1.7-12.3-4.7-6.6-25.4.3-42.2,7.1-78.6,32.9-96.1,49-94.1,57.5,1.6,6.7,16.5,13.5,29.3,10.8,7.8-1.7,13-6.5,15.8-9.5"
        />
        <path
          pathLength={1}
          d="M186.1,125c16.5-8.3,29.6-15.6,38.7-20.9,10.1-5.8,17.2-10.7,20.1-8.4,2.9,2.4-.2,10.3-3.3,18.7-4.1,11.2-9.9,27.2-16.5,47.7"
        />
        <path
          pathLength={1}
          d="M308.7,151.4c-17.4,1.8-23.1-1-24.7-4.3-2.1-4.3,2.6-9.7,13-29.9,9.1-17.8,8.6-19.7,7.9-20.5-2.5-2.7-11.7,2.4-39.5,17.3-12.7,6.8-22.8,12.2-28.2,15.1"
        />
        <ellipse pathLength={1} cx="194.7" cy="129.6" rx="188.7" ry="123.6" />
      </g>
      <style jsx>{`
        .logo-draw path,
        .logo-draw ellipse {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: draw 1.8s var(--ease-editorial, ease) forwards;
        }
        .logo-draw path:nth-child(1) {
          animation-delay: 0.1s;
        }
        .logo-draw path:nth-child(2) {
          animation-delay: 0.35s;
        }
        .logo-draw path:nth-child(3) {
          animation-delay: 0.55s;
        }
        .logo-draw ellipse {
          animation-delay: 0.8s;
          animation-duration: 1.4s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-draw path,
          .logo-draw ellipse {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
