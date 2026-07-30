const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
let assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '';

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  if (!repo.endsWith('.github.io')) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  reactStrictMode: true,
};

export default nextConfig;