import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export', // Tells Next.js to generate static HTML/CSS/JS files
    images: {
      unoptimized: true, // Required because GitHub Pages doesn't support Next.js dynamic image optimization
    },
    basePath: '/Portfolio',
};

export default nextConfig;
