import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const query = Object.fromEntries(params.entries());
  const token = process.env.TELEGRAM_BOT_TOKEN;

  // Проверяем подпись, чтобы убедиться в легитимности данных
  const dataCheckString = Object.keys(query)
    .filter((key) => key !== 'hash')
    .sort()
    .map((key) => `${key}=${query[key]}`)
    .join('\n');

  const secretKey = crypto.createHash('sha256').update(token || '').digest();
  const hash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  if (hash !== query.hash) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  }

  // Пользователь подтвержден
  const userData = {
    id: query.id,
    first_name: query.first_name,
    last_name: query.last_name,
    username: query.username,
    photo_url: query.photo_url,
  };

  // Здесь можно сохранить данные пользователя в сессии или базе данных
  return NextResponse.json(userData);
}
