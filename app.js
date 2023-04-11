// pathRewrite: {
//   "^/111": "/api/v1/rest/datastore/301000000A-000082-053",
//   "^/110": "/api/v1/rest/datastore/301000000A-000082-049",
//   "^/109": "/api/v1/rest/datastore/301000000A-000082-045",
//   "^/108": "/api/v1/rest/datastore/301000000A-000082-041",
//   "^/107": "/api/v1/rest/datastore/301000000A-000082-033",
// },
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = process.env.PORT || 10000;

app.use(
  "/api/v1/rest/datastore/301000000A-000082-041",
  createProxyMiddleware({
    target: "https://od.moi.gov.tw",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1/rest/datastore/301000000A-000082-041":
        "/api/v1/rest/datastore/301000000A-000082-041",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, Content-Type, Authorization",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
