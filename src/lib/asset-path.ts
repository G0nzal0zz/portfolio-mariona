export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return base ? `${base}/${normalized}` : `/${normalized}`;
}
