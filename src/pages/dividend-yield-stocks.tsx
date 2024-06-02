
import React from 'react';
import TableIframe from '@/components/component/table-frame';
import { JSDOM } from 'jsdom';

export async function getServerSideProps() {
  const res = await fetch('https://www.scstrade.com/MarketStatistics/MS_MarketValuations.aspx?sectorid=-14&name=Top%2040%20Highest%20Dividend%20Yield%20Stocks');
  const html = await res.text();

  // Process the HTML using JSDOM
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // Modify the DOM as needed
  const header = document.querySelector('#header');
  if (header) {
    // @ts-ignore
    header.style.display = 'none';
  }

  const processedHtml = dom.serialize();

  return {
    props: {
      data: processedHtml,
    },
  };
}

const DividendYieldStocksPage: React.FC<{ data: string }> = () => {
  return (
    <div>
      <TableIframe />
    </div>
  );
};

export default DividendYieldStocksPage;
