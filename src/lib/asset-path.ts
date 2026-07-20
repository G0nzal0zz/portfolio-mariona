const repo = typeof window === 'undefined'
  ? (process.env.GITHUB_REPOSITORY ?? '').replace(/.*?\//, '')
  : window.location.pathname.split('/')[1] || '';

const basePath = repo ? `/${repo}` : '';

export function assetPath(path: string): string {
  if (!path || path.startsWith('http')) return path;
  return `${basePath}${path}`;
}
