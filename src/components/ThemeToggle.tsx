'use client';

import clsx from 'clsx';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs tracking-wide"
      role="group"
      aria-label="Tema / Theme"
    >
      <span aria-hidden="true" className="opacity-50">
        [
      </span>
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        data-cursor="view"
        className={clsx(
          'transition-opacity underline-offset-4',
          theme === 'light' ? 'opacity-100 underline' : 'opacity-50 hover:opacity-100',
        )}
      >
        {t.theme.light}
      </button>
      <span aria-hidden="true" className="opacity-50">
        |
      </span>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        data-cursor="view"
        className={clsx(
          'transition-opacity underline-offset-4',
          theme === 'dark' ? 'opacity-100 underline' : 'opacity-50 hover:opacity-100',
        )}
      >
        {t.theme.dark}
      </button>
      <span aria-hidden="true" className="opacity-50">
        ]
      </span>
    </div>
  );
}
