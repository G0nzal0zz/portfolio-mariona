'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Cursor circular blanco que crece suavemente al pasar sobre cualquier
 * elemento con data-cursor="view". Si ese elemento además lleva
 * data-cursor-image (ver ProjectCard), el círculo se sustituye por esa
 * imagen (PNG con transparencia), específica de cada proyecto.
 * Se desactiva por completo en dispositivos sin puntero fino (ver globals.css).
 */
export function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [cursorImage, setCursorImage] = useState<string | null>(null);
  const [cursorImageSize, setCursorImageSize] = useState(120);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let x = 0;
    let y = 0;
    let rafId: number;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      const transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
      if (circleRef.current) circleRef.current.style.transform = transform;
      if (imageRef.current) imageRef.current.style.transform = transform;
      rafId = requestAnimationFrame(render);
    };

    const handleOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor="view"]') as HTMLElement | null;
      setActive(Boolean(target));
      setCursorImage(target?.dataset.cursorImage || null);
      setCursorImageSize(Number(target?.dataset.cursorImageSize) || 120);
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', handleOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const showImage = active && Boolean(cursorImage);

  return (
    <>
      <div
        ref={circleRef}
        className={`custom-cursor ${active && !showImage ? 'custom-cursor--active' : ''} ${
          showImage ? 'opacity-0' : ''
        }`}
        aria-hidden="true"
      />
      {cursorImage && (
        <div
          ref={imageRef}
          className={`custom-cursor-image ${showImage ? 'custom-cursor-image--active' : ''}`}
          style={{ width: cursorImageSize, height: cursorImageSize }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- cursor decorativo, tamaño fijo pequeño */}
          <img src={cursorImage} alt="" className="h-full w-full object-contain" />
        </div>
      )}
    </>
  );
}
