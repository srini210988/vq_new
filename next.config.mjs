/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = '/vq_new'; // Replace with your repo name

const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure base path for GitHub Pages
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  
  // Configure asset prefix for GitHub Pages
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : '',
  
  // Disable server-side features not compatible with static export
  images: {
    unoptimized: true
  },
  
  // Handle static exports and routing
  trailingSlash: true,
 

  // Webpack configuration for any special requirements
  webpack: (config, { isServer }) => {
    // Add any custom webpack configurations
    return config;
  }
}

export default nextConfig;
