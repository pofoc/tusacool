'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import { ReactNode, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TelegramButton } from './TelegramButton';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--tg-theme-bg-color)]">
      <header className="p-4 border-b border-[var(--tg-theme-hint-color)] border-opacity-20">
        <div className="flex items-center relative">
          <div className="absolute left-0">
            {pathname === '/partners' && (
              <Link href="/" className="tg-button !w-auto !inline-flex !m-0">
                Назад
              </Link>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <TelegramButton className="bg-yellow-500 !w-auto !m-0">
              Донат
            </TelegramButton>
          </div>
          <div className="absolute right-0">
            <TonConnectButton />
          </div>
        </div>
      </header>
      <main className="p-4 max-w-md mx-auto">
        {children}
      </main>
    </div>
  );
}