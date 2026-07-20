export type Theme = 'dark' | 'light';

// Nombre de cookie compartido entre servidor (lectura) y cliente (escritura al alternar).
// Este archivo NO debe importar next/headers: lo consumen tanto Server como Client Components.
export const THEME_COOKIE = 'ml_theme';
