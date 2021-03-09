import * as React from 'react';

export const ExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <path fill="#444" d="M14 16V5l-1 1v9H1V3h9l1-1H0v14z"></path>
    <path fill="#444" d="M16 0h-5l1.8 1.8L6 8.6 7.4 10l6.8-6.8L16 5z"></path>
  </svg>
);
