// server.js
const express = require('express');
const next = require('next');
const request = require('request');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const targetUrl = 'https://www.scstrade.com';

app.prepare().then(() => {
  const server = express();

  // Proxy for the main URL
  server.get('/proxy', (req, res) => {
    const url = `${targetUrl}/MarketStatistics/MS_MarketValuations.aspx?sectorid=-14&name=Top%2040%20Highest%20Dividend%20Yield%20Stocks`;
    request(url).pipe(res);
  });

  // Proxy middleware to handle static resources
  server.use('/proxy-resources', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/proxy-resources': ''
    },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Origin', targetUrl);
    }
  }));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
