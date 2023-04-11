const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy requests to the appropriate API based on the endpoint
app.use(
  "/",
  createProxyMiddleware({
    target: "https://od.moi.gov.tw",
    changeOrigin: true,
    pathRewrite: {
      "^/111": "/api/v1/rest/datastore/301000000A-000082-053",
      "^/110": "/api/v1/rest/datastore/301000000A-000082-049",
      "^/109": "/api/v1/rest/datastore/301000000A-000082-045",
      "^/108": "/api/v1/rest/datastore/301000000A-000082-041",
      "^/107": "/api/v1/rest/datastore/301000000A-000082-033",
    },
  })
);

// Serve static files from the 'build' directory
app.use(express.static("build"));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
