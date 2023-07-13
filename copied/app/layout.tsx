import './globals.css';
import type { Metadata } from 'next';
import RtlProvider from '../context/RtlProvider';

import localFont from 'next/font/local';

const YekanBakhFaNumReg = localFont({
  src: '../public/YekanBakhFaNum-Regular.woff2',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  header,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang='ar' dir='rtl'>
      <body className={YekanBakhFaNumReg.className}>
        <RtlProvider>
          {header}
          {children}
        </RtlProvider>
      </body>
    </html>
  );
}
