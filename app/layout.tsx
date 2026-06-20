import type { ReactNode } from 'react';
import Head from 'next/head';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <title>Argus</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;