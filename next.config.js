module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      });
    }

    return config;
  },
};

  module.exports = {
    // Add your other Next.js configuration options here
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed
      };
    },
  };