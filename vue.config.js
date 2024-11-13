const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tsedey/'  // Set this to your GitHub repository name
    : '/'         // Root for local development
});
