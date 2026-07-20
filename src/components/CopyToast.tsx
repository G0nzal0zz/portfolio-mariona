'use client';

export function CopyToast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2 font-mono text-xs tracking-wide transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span
        className="rounded-full px-4 py-2"
        style={{ background: 'var(--fg)', color: 'var(--bg)' }}
      >
        {message}
      </span>
    </div>
  );
}
