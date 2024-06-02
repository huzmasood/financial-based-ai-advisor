import fetch from 'node-fetch';

export default async function handler(req, res) {
  const response = await fetch('https://www.scstrade.com/MarketStatistics/MS_MarketValuations.aspx?sectorid=-14&name=Top%2040%20Highest%20Dividend%20Yield%20Stocks');
  let data = await response.text();

  // Inject custom styles and scripts
  const resourceInjection = `
    <link rel="stylesheet" href="https://www.scstrade.com/Content/css/main.css">
    <script src="https://www.scstrade.com/Content/js/main.js"></script>
    <style>
      #header {
        display: none !important;
      }
    </style>
  `;

  // Fix relative URLs
  data = data.replace(/href="\//g, 'href="https://www.scstrade.com/')
             .replace(/src="\//g, 'src="https://www.scstrade.com/');

  // Inject the resources into the head
  data = data.replace('</head>', `${resourceInjection}</head>`);

  // Send the modified HTML
  res.status(200).send(data);
}
