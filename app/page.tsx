"use client";

import { MainLayout } from '@/components/MainLayout';
import { TelegramButton } from '@/components/TelegramButton';
import Link from 'next/link';


export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-2">
        <Link href="/partners" className="tg-button">
          Партнеры
        </Link>

        <TelegramButton className="bg-green-500">
          Пригласить
        </TelegramButton>

        <TelegramButton>
          Настройки
        </TelegramButton>

        {/* Компонент авторизации Telegram */}
        <TelegramLogin />
      </div>
    </MainLayout>
  );
}
