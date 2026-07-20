'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const linkClass = 'opacity-80 transition-opacity hover:opacity-100 hover:underline underline-offset-4';

export function HeaderNav() {
  const { t } = useLanguage();

  return (
    <nav className="hidden gap-8 font-mono text-sm tracking-wide md:flex" aria-label="Principal">
      <Link href="/" data-cursor="view" className={linkClass}>
        {t.nav.home}
      </Link>
      <Link href="/work" data-cursor="view" className={linkClass}>
        {t.nav.work}
      </Link>
      <Link href="/contact" data-cursor="view" className={linkClass}>
        {t.nav.contact}
      </Link>
    </nav>
  );
}
