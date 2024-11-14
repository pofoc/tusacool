// components/TonConnectProvider.tsx
"use client";

import React, { useEffect } from 'react';

const TonConnectProvider = () => {
  useEffect(() => {
    // Логика подключения к TonConnect с использованием чистого JS или альтернативных библиотек.
    fetch('https://api.tonconnect.io', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('TonConnect API response:', data);
      })
      .catch((error) => {
        console.error('Ошибка подключения к TonConnect:', error);
      });
  }, []);

  return (
    <div>
      <p>TonConnect Provider</p>
    </div>
  );
};

export default TonConnectProvider;
