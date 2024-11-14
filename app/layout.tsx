"use client";

import Script from 'next/script';
import { ReactNode } from 'react';
import { MainLayout } from '@/components/MainLayout';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <MainLayout>
      {/* Замените strategy на afterInteractive */}
      <Script src="https://example.com/some-script.js" strategy="afterInteractive" />

      {/* Основное содержимое приложения */}
      <div>
        {children}
      </div>
    </MainLayout>
  );
}
