'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { LogoMark } from './LogoMark';
import { CopyToast } from './CopyToast';

// Datos tal como aparecen en las capturas de referencia.
const EMAIL = 'marionalarroya.design@gmail.com';
const PHONE = '+34 628 54 06 98';
const SOCIAL = {
  instagram: 'https://www.instagram.com/mariona.larroya/',
  linkedin: 'https://www.linkedin.com/in/mariona-larroya-8978b9336/?skipRedirect=true',
  behance: 'https://www.behance.net/marionalarroya',
};
const PDF_HREF = '/mariona-larroya-portfolio.pdf';

export function Footer() {
  const { t } = useLanguage();
  const [toastVisible, setToastVisible] = useState(false);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 1800);
    } catch {
      // Si el portapapeles no está disponible, no interrumpimos al usuario.
    }
  };

  return (
    <footer id="contact" className="relative border-t border-current/30 px-6 pb-4 pt-4 md:px-10 md:pb-5 md:pt-5">
      <LogoMark sizePx={96} className="opacity-90 md:absolute md:bottom-5 md:left-10" />

      {/* En desktop el logo queda fuera del flujo (arriba), así esta fila
          arranca exactamente en el borde izquierdo de la página — el mismo
          punto de partida que el aside/columna de imágenes en las páginas
          de proyecto — sin que el ancho del logo la desplace. */}
      <div className="mt-8 flex flex-col gap-6 md:mt-0 md:flex-row md:flex-nowrap md:items-start">
        {/* Espaciador: mismo ancho que la columna de texto de las páginas de
            proyecto (38% / max-w-xl), así "Social" arranca justo donde
            empieza la columna de imágenes en esas páginas. */}
        <div className="hidden md:block md:w-[38%] md:max-w-xl md:shrink-0" aria-hidden="true" />

        <div className="flex flex-1 flex-col gap-6 md:flex-row md:flex-nowrap md:items-start">
          <span className="text-xs tracking-wide opacity-60 md:text-[13px]">{t.footer.social}</span>

          <div className="flex flex-col gap-1 text-xs tracking-wide md:ml-2 md:text-[13px]">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" data-cursor="view" className="w-fit hover:underline underline-offset-4">
              Instagram
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="view" className="w-fit hover:underline underline-offset-4">
              Linkedin
            </a>
            <a href={SOCIAL.behance} target="_blank" rel="noopener noreferrer" data-cursor="view" className="w-fit hover:underline underline-offset-4">
              Behance
            </a>
          </div>

          <span className="text-xs tracking-wide opacity-60 md:ml-16 md:text-[13px]">{t.footer.contact}</span>

          <div className="flex flex-col gap-1 text-xs tracking-wide md:ml-2 md:text-[13px]">
            <button type="button" data-cursor="view" onClick={() => copy(EMAIL)} className="w-fit text-left hover:underline underline-offset-4">
              {EMAIL}
            </button>
            <button type="button" data-cursor="view" onClick={() => copy(PHONE)} className="w-fit text-left hover:underline underline-offset-4">
              {PHONE}
            </button>
          </div>

          <p className="text-xs tracking-wide md:ml-auto md:text-[13px]">
            {t.footer.pdf}{' '}
            <a href={PDF_HREF} download data-cursor="view" className="hover:underline underline-offset-4">
              {t.footer.pdfDownload}
            </a>
          </p>
        </div>
      </div>

      <CopyToast message={t.footer.copied} visible={toastVisible} />
    </footer>
  );
}
