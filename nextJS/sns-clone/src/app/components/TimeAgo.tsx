'use client';

import { useTimeAgo } from '../../../hooks/uesTimeAgo';

export default function TimeAgo({ date }: { date: string }) {
  const timeAgo = useTimeAgo(date);
  return <>{timeAgo}</>;
}
