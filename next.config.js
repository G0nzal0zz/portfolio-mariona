/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '');
const basePath = repo ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
