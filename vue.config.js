module.exports = {
  devServer: {
    port: 8088,
    bonjour: true,
    // proxy: "http://localhost:8000",
    proxy: {
      "/k8/*": {
        target: "http://localhost:8000",
        changeOrigin: true,
        pathRewrite: { "^/k8/*": "/" }
      },
      "/api/*": {
        target: "http://localhost:9000"
      }
    }
  }
};
