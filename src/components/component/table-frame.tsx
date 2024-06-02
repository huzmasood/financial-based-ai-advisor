"use client";
import React, { useEffect, useRef } from 'react';

const TableIframe: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // useEffect(() => {
  //   const handleIframeLoad = () => {
  //     const iframe = iframeRef.current;
  //     if (iframe) {
  //       const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;

  //       if (iframeDocument) {
  //         // Example: Change class name of a specific element
  //         const elementToModify = iframeDocument.querySelector('.some-class-name');
  //         if (elementToModify) {
  //           elementToModify.className = 'new-class-name';
  //         }

  //         // Or you can add/remove classes
  //         const anotherElement = iframeDocument.querySelector('.another-class-name');
  //         if (anotherElement) {
  //           anotherElement.classList.add('new-class');
  //           anotherElement.classList.remove('another-class-name');
  //         }

  //         // You can also apply styles directly
  //         const styledElement = iframeDocument.querySelector('.styled-element');
  //         if (styledElement) {
  //           //@ts-ignore
  //           styledElement.style.color = 'red';
  //           // @ts-ignore
  //           styledElement.style.fontSize = '20px';
  //         }
  //       }
  //     }
  //   };

  //   const iframe = iframeRef.current;
  //   if (iframe) {
  //     iframe.addEventListener('load', handleIframeLoad);
  //   }

  //   return () => {
  //     if (iframe) {
  //       iframe.removeEventListener('load', handleIframeLoad);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-32 bg-white z-50"></div>
      <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
        <iframe 
          ref={iframeRef}
          src="https://www.scstrade.com/MarketStatistics/MS_MarketValuations.aspx?sectorid=-14&name=Top%2040%20Highest%20Dividend%20Yield%20Stocks"
          width="100%" 
          height="100%" 
          style={{ border: 'none', height: '600px', overflow: 'hidden' }}
          title="Top 40 Highest Dividend Yield Stocks"
        />
      </div>
    </div>
  );
};

export default TableIframe;
