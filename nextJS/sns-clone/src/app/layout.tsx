import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Nav from './components/header/Nav';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: "Gyeom's SNS",
  description: "Gyeom's SNSのメインページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* `${geistSans.variable} ${geistMono.variable} antialiased` */}
      <body>
        <Nav></Nav>
        <div className='w-3/4 flex justify-self-center'>{children}</div>
      </body>
    </html>
  );
}
