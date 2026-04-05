'use client';

import { useEffect, useState } from 'react';

export function useTimeAgo(dateString: string) {
  const [timeAgo, setTimeAgo] = useState('');

  const calculate = () => {
    const now = new Date();
    const past = new Date(dateString);
    const diff = (now.getTime() - past.getTime()) / 1000;

    if (diff < 10) return 'ただいま';
    if (diff < 60) return `${Math.floor(diff)}秒前`;

    const minutes = diff / 60;
    if (minutes < 60) return `${Math.floor(minutes)}分前`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}時間前`;

    const days = hours / 24;
    if (days < 30) return `${Math.floor(days)}日前`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}ヶ月前`;

    const years = months / 12;
    return `${Math.floor(years)}年前`;
  };

  useEffect(() => {
    setTimeAgo(calculate());

    const interval = setInterval(() => {
      setTimeAgo(calculate());
    }, 60000);

    return () => clearInterval(interval);
  }, [dateString]);

  return timeAgo;
}
