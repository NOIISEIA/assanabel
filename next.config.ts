import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Ancien slug « À propos » → /a-propos
      {
        source: "/a-propos-2",
        destination: "/a-propos",
        permanent: true,
      },
      // Ancienne page réservation table → parcours devis événement
      {
        source: "/reservation",
        destination: "/devis",
        permanent: true,
      },
      {
        source: "/reservation/",
        destination: "/devis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
