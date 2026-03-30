'use client';

import { useEffect, useState } from 'react';

export function useTimeAgo(dateString: string) {
  const [timeAgo, setTimeAgo] = useState('');

  const calculate = () => {
    const now = new Date();
    const past = new Date(dateString);
    const diff = (now.getTime() - past.getTime()) / 1000;

    if (diff < 10) return '방금 전';
    if (diff < 60) return `${Math.floor(diff)}초 전`;

    const minutes = diff / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 30) return `${Math.floor(days)}일 전`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;

    const years = months / 12;
    return `${Math.floor(years)}년 전`;
  };

  useEffect(() => {
    setTimeAgo(calculate());

    const interval = setInterval(() => {
      setTimeAgo(calculate());
    }, 60000); // 1분마다 갱신

    return () => clearInterval(interval);
  }, [dateString]);

  return timeAgo;
}
