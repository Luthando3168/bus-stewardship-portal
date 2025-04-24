
import React from 'react';

const Favicon = () => {
  const svgString = encodeURIComponent(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          src: local('Montserrat');
        }
      </style>
      <text 
        x="50%" 
        y="50%" 
        font-family="Montserrat, sans-serif"
        font-size="12"
        font-weight="700"
        fill="#C5AA6A"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        LMCA
      </text>
      <line 
        x1="6" 
        y1="22" 
        x2="26" 
        y2="22" 
        stroke="#C5AA6A" 
        stroke-width="2"
      />
    </svg>
  `);

  const faviconUrl = `data:image/svg+xml,${svgString}`;

  return (
    <link rel="icon" href={faviconUrl} type="image/svg+xml" />
  );
};

export default Favicon;
