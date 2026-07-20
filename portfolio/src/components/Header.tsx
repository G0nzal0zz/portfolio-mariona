import { LangToggle } from './LangToggle';
import { ThemeToggle } from './ThemeToggle';
import { HeaderNav } from './HeaderNav';
import { LogoMark } from './LogoMark';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center bg-[var(--bg)] px-6 py-5 md:px-10 md:py-6">
      <LogoMark sizePx={40} className="md:hidden" />
      <LogoMark sizePx={48} className="hidden md:block" />

      <div className="ml-16 md:ml-24">
        <HeaderNav />
      </div>

      {/* Desktop: idioma/tema visibles siempre. Móvil: se mueven dentro del menú. */}
      <div className="ml-auto hidden items-center gap-4 md:flex">
        <LangToggle />
        <ThemeToggle />
      </div>
      <div className="ml-auto md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
