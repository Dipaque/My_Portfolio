/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
      ignoreBuildErrors:true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: {
          ssr: true,
          minify: true,
          // Not supported yet.
          transpileTemplateLiterals: true,
          // Not supported yet.
          pure: true,
        },
      },
      reactStrictMode:false
};

export default nextConfig;
