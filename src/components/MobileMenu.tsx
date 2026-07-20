'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { LangToggle } from './LangToggle';
import { ThemeToggle } from './ThemeToggle';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  // Bloquea el scroll de fondo mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Cierra el menú automáticamente si la persona agranda la ventana a desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className="block h-px w-6 bg-current transition-transform duration-300 ease-editorial"
          style={open ? { transform: 'translateY(3px) rotate(45deg)' } : undefined}
        />
        <span
          className="block h-px w-6 bg-current transition-opacity duration-300 ease-editorial"
          style={open ? { opacity: 0 } : undefined}
        />
        <span
          className="block h-px w-6 bg-current transition-transform duration-300 ease-editorial"
          style={open ? { transform: 'translateY(-3px) rotate(-45deg)' } : undefined}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--bg)] px-6 pb-10 pt-24">
          <nav className="flex flex-col gap-6 font-mono text-2xl tracking-wide" aria-label="Principal">
            <Link href="/" onClick={() => setOpen(false)} className="w-fit">
              {t.nav.home}
            </Link>
            <Link href="/work" onClick={() => setOpen(false)} className="w-fit">
              {t.nav.work}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="w-fit">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
