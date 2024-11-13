import { MainLayout } from '@/components/MainLayout';
import { TelegramButton } from '@/components/TelegramButton';

export default function Partners() {
  return (
    <MainLayout>
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <TelegramButton>
            Стать партнером
          </TelegramButton>

          <TelegramButton>
            Список партнеров
          </TelegramButton>
        </div>
      </div>
    </MainLayout>
  );
}