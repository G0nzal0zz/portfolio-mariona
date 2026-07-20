'use client';

import clsx from 'clsx';
import { useLanguage } from '@/lib/language-context';

export function LangToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-wide" role="group" aria-label="Idioma / Language">
      <span aria-hidden="true" className="opacity-50">
        [
      </span>
      <button
        type="button"
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        data-cursor="view"
        className={clsx('transition-opacity', locale === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-100')}
      >
        {t.lang.es}
      </button>
      <span aria-hidden="true" className="opacity-50">
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        data-cursor="view"
        className={clsx('transition-opacity', locale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100')}
      >
        {t.lang.en}
      </button>
      <span aria-hidden="true" className="opacity-50">
        ]
      </span>
    </div>
  );
}
