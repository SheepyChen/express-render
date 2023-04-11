const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy requests to https://od.moi.gov.tw/api
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://od.moi.gov.tw",
    changeOrigin: true,
    pathRewrite: {
      "^/api/111": "/api/v1/rest/datastore/301000000A-000082-053",
      "^/api/110": "/api/v1/rest/datastore/301000000A-000082-049",
      "^/api/109": "/api/v1/rest/datastore/301000000A-000082-045",
      "^/api/108": "/api/v1/rest/datastore/301000000A-000082-041",
      "^/api/107": "/api/v1/rest/datastore/301000000A-000082-033",
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
