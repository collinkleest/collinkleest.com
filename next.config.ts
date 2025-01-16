import type { NextConfig } from 'next'

const DEPLOY_ENV: string | undefined = process?.env?.DEPLOY_ENV

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  },
  basePath: DEPLOY_ENV === 'github-pages' ? '/collinkleest.com' : '',
  output: DEPLOY_ENV === 'github-pages' ? 'export' : undefined
}

export default nextConfig
