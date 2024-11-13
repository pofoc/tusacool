import { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?19';
    script.async = true;
    script.setAttribute('data-telegram-login', 'ваш_бот_имя'); // Замените на имя вашего бота
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', 'https://ваш-домен.vercel.app/api/auth/telegram');
    script.setAttribute('data-request-access', 'write');

    document.getElementById('telegram-login-container')?.appendChild(script);

    return () => {
      document.getElementById('telegram-login-container')!.innerHTML = '';
    };
  }, []);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;
