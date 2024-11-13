import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { TonConnectProvider } from '@/components/TonConnectProvider';

export const metadata: Metadata = {
  title: 'Telegram Web App',
  description: 'Telegram Web App with TON Connect',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body>
        <TonConnectProvider>
          {children}
        </TonConnectProvider>
      </body>
    </html>
  );
}