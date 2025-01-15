import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  },
  basePath:
    process?.env?.DEPLOY_ENV === 'github-pages' ? '/collinkleest.com' : ''
}

export default nextConfig
