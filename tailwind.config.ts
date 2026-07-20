import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identidad: solo azul eléctrico y blanco. Nunca negro.
        electric: '#0025FF',
        paper: '#FFFFFF',
      },
      fontFamily: {
        // Sustituir por Saans / Saans Mono en cuanto lleguen los archivos.
        // Se referencian por variable CSS para que el cambio sea de una sola línea.
        sans: ['var(--font-display)', 'Neue Haas Grotesk Display Pro', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
